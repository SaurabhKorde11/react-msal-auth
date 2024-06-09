// src/App.tsx
import React from 'react';
import { AuthProvider, useMsalAuth } from 'react-msal-auth';
import { Configuration } from '@azure/msal-browser';

const msalConfig: Configuration = {
  auth: {
    clientId: 'YOUR_CLIENT_ID',
    authority: 'YOUR_AUTHORITY',
    redirectUri: 'YOUR_REDIRECT_URI'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false
  }
};

const serviceTeamGroupId = "YOUR_SERVICE_TEAM_GROUP_ID";

const App: React.FC = () => {
  const { handleLogin, isAuthenticated, isAuthorized } = useMsalAuth({
    scopes: ["User.Read"]
  });

  return (
    <AuthProvider config={msalConfig} serviceTeamGroupId={serviceTeamGroupId}>
      {isAuthenticated ? (
        isAuthorized ? (
          <div>Welcome to the application!</div>
        ) : (
          <div>You do not have access to this application.</div>
        )
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </AuthProvider>
  );
};

export default App;
