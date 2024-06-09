import { PublicClientApplication, AccountInfo } from '@azure/msal-browser';

export interface AuthContextType {
  msalInstance: PublicClientApplication;
  isAuthorized: boolean;
  checkGroupMembership: (account: AccountInfo) => Promise<void>;
}
