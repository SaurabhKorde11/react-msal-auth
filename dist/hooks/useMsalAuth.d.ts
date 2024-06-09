declare const useMsalAuth: (loginRequest: any) => {
    handleLogin: () => void;
    isAuthenticated: boolean;
    isAuthorized: boolean;
};
export default useMsalAuth;
