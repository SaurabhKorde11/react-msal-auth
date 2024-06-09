// src/context/AuthProvider.tsx
import React, { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { PublicClientApplication, Configuration, AccountInfo } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import axios from 'axios';
import { AuthContextType } from '../types/AuthContextType';

interface AuthProviderProps {
  config: Configuration;
  serviceTeamGroupId: string;
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ config, serviceTeamGroupId, children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const msalInstance = new PublicClientApplication(config);

  const checkGroupMembership = async (account: AccountInfo) => {
    const response = await msalInstance.acquireTokenSilent({
      scopes: ["User.Read"],
      account: account
    });

    const accessToken = response.accessToken;
    const graphResponse = await axios.get(
      'https://graph.microsoft.com/v1.0/me/memberOf',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    const groups = graphResponse.data.value;
    if (groups.some((group: { id: string }) => group.id === serviceTeamGroupId)) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };

  return (
    <AuthContext.Provider value={{ msalInstance, isAuthorized, checkGroupMembership }}>
      <MsalProvider instance={msalInstance}>
        {children}
      </MsalProvider>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
