import React from 'react';
import { Configuration } from "@azure/msal-browser";
interface AuthProviderProps {
    config: Configuration;
    serviceTeamGroupId: string;
    children: React.ReactNode;
}
declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuthContext: () => {
    serviceTeamGroupId: string;
};
export default AuthProvider;
