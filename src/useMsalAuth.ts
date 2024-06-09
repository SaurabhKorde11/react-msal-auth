import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './authProvider';

export const useMsalAuth = (loginRequest: any) => {
  const { instance, accounts } = useMsal();
  const { serviceTeamGroupId } = useAuthContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (accounts.length > 0) {
      setIsAuthenticated(true);
      checkGroupMembership();
    }
  }, [accounts]);

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

  const checkGroupMembership = async () => {
    const account = accounts[0];
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
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

  return { handleLogin, isAuthenticated, isAuthorized };
};
