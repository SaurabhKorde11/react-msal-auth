import React, { ReactNode } from 'react';
import { Configuration } from '@azure/msal-browser';
import { AuthContextType } from '../types/AuthContextType';
interface AuthProviderProps {
    config: Configuration;
    serviceTeamGroupId: string;
    children: ReactNode;
}
declare const AuthContext: React.Context<AuthContextType | null>;
declare const AuthProvider: React.FC<AuthProviderProps>;
export { AuthProvider, AuthContext };
