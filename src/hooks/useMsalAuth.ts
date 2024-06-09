// src/hooks/useMsalAuth.ts
import { useContext, useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { AuthContext } from '../context/authProvider';

const useMsalAuth = (loginRequest:any) => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useMsalAuth must be used within an AuthProvider');
  }

  const { msalInstance, isAuthorized, checkGroupMembership } = context;
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated && accounts.length > 0) {
      checkGroupMembership(accounts[0]);
    }
  }, [isAuthenticated, accounts]);

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

  return {
    handleLogin,
    isAuthenticated,
    isAuthorized
  };
};

export default useMsalAuth;
