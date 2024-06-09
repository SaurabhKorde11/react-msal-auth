import React, { useEffect, useState, createContext, useContext } from 'react';
import { PublicClientApplication, Configuration } from "@azure/msal-browser";
import { MsalProvider } from '@azure/msal-react';

interface AuthProviderProps {
  config: Configuration;
  serviceTeamGroupId: string;
  children: React.ReactNode;
}

const AuthContext = createContext<{ serviceTeamGroupId: string }>({ serviceTeamGroupId: '' });

const AuthProvider: React.FC<AuthProviderProps> = ({ config, serviceTeamGroupId, children }) => {
  const [msalInstance, setMsalInstance] = useState<PublicClientApplication | null>(null);

  useEffect(() => {
    const instance = new PublicClientApplication(config);
    setMsalInstance(instance);
  }, [config]);

  if (!msalInstance) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ serviceTeamGroupId }}>
      <MsalProvider instance={msalInstance}>{children}</MsalProvider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
