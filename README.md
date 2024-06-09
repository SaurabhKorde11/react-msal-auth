# React MSAL Auth

A React library for Microsoft authentication using MSAL.

## Installation

```sh
npm install react-msal-auth


## Usage Instructions(Example)

#Step 1: Install the Library
#First, install the react-msal-auth library along with React and TypeScript:
npm install react-msal-auth @azure/msal-browser react react-dom

#Also, make sure you have the type declarations for React and ReactDOM:
npm install --save-dev @types/react @types/react-dom

# Step 2: Create Configuration
# Create a msalConfig object that contains your MSAL configuration:

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

export default msalConfig;


# Step 3: Set Up the App Component
# Create an App.tsx file where you will use the AuthProvider and useMsalAuth hook from the react-msal-auth library:


import React from 'react';
import { AuthProvider, useMsalAuth } from 'react-msal-auth';
import msalConfig from './msalConfig';

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


# Step 4: Create the Entry Point
# Create an index.tsx file to render the App component:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




