"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMsalAuth = exports.useAuthContext = exports.AuthProvider = void 0;
var authProvider_1 = require("./authProvider");
Object.defineProperty(exports, "AuthProvider", { enumerable: true, get: function () { return __importDefault(authProvider_1).default; } });
Object.defineProperty(exports, "useAuthContext", { enumerable: true, get: function () { return authProvider_1.useAuthContext; } });
var useMsalAuth_1 = require("./useMsalAuth");
Object.defineProperty(exports, "useMsalAuth", { enumerable: true, get: function () { return useMsalAuth_1.useMsalAuth; } });
