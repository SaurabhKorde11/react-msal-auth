"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/App.tsx
var react_1 = __importDefault(require("react"));
var react_msal_auth_1 = require("react-msal-auth");
var msalConfig = {
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
var serviceTeamGroupId = "YOUR_SERVICE_TEAM_GROUP_ID";
var App = function () {
    var _a = (0, react_msal_auth_1.useMsalAuth)({
        scopes: ["User.Read"]
    }), handleLogin = _a.handleLogin, isAuthenticated = _a.isAuthenticated, isAuthorized = _a.isAuthorized;
    return (react_1.default.createElement(react_msal_auth_1.AuthProvider, { config: msalConfig, serviceTeamGroupId: serviceTeamGroupId }, isAuthenticated ? (isAuthorized ? (react_1.default.createElement("div", null, "Welcome to the application!")) : (react_1.default.createElement("div", null, "You do not have access to this application."))) : (react_1.default.createElement("button", { onClick: handleLogin }, "Sign In"))));
};
exports.default = App;
