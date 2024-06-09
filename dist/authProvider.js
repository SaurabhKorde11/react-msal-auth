"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthContext = void 0;
var react_1 = __importStar(require("react"));
var msal_browser_1 = require("@azure/msal-browser");
var msal_react_1 = require("@azure/msal-react");
var AuthContext = (0, react_1.createContext)({ serviceTeamGroupId: '' });
var AuthProvider = function (_a) {
    var config = _a.config, serviceTeamGroupId = _a.serviceTeamGroupId, children = _a.children;
    var _b = (0, react_1.useState)(null), msalInstance = _b[0], setMsalInstance = _b[1];
    (0, react_1.useEffect)(function () {
        var instance = new msal_browser_1.PublicClientApplication(config);
        setMsalInstance(instance);
    }, [config]);
    if (!msalInstance) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    return (react_1.default.createElement(AuthContext.Provider, { value: { serviceTeamGroupId: serviceTeamGroupId } },
        react_1.default.createElement(msal_react_1.MsalProvider, { instance: msalInstance }, children)));
};
var useAuthContext = function () { return (0, react_1.useContext)(AuthContext); };
exports.useAuthContext = useAuthContext;
exports.default = AuthProvider;
