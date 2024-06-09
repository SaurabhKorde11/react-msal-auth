"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/hooks/useMsalAuth.ts
var react_1 = require("react");
var msal_react_1 = require("@azure/msal-react");
var authProvider_1 = require("../context/authProvider");
var useMsalAuth = function (loginRequest) {
    var context = (0, react_1.useContext)(authProvider_1.AuthContext);
    if (!context) {
        throw new Error('useMsalAuth must be used within an AuthProvider');
    }
    var msalInstance = context.msalInstance, isAuthorized = context.isAuthorized, checkGroupMembership = context.checkGroupMembership;
    var _a = (0, msal_react_1.useMsal)(), instance = _a.instance, accounts = _a.accounts;
    var isAuthenticated = (0, msal_react_1.useIsAuthenticated)();
    (0, react_1.useEffect)(function () {
        if (isAuthenticated && accounts.length > 0) {
            checkGroupMembership(accounts[0]);
        }
    }, [isAuthenticated, accounts]);
    var handleLogin = function () {
        instance.loginPopup(loginRequest).catch(function (e) {
            console.error(e);
        });
    };
    return {
        handleLogin: handleLogin,
        isAuthenticated: isAuthenticated,
        isAuthorized: isAuthorized
    };
};
exports.default = useMsalAuth;
