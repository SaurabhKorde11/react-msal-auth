"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMsalAuth = exports.AuthContext = exports.AuthProvider = void 0;
// src/index.ts
var authProvider_1 = require("./context/authProvider");
Object.defineProperty(exports, "AuthProvider", { enumerable: true, get: function () { return authProvider_1.AuthProvider; } });
Object.defineProperty(exports, "AuthContext", { enumerable: true, get: function () { return authProvider_1.AuthContext; } });
var useMsalAuth_1 = require("./hooks/useMsalAuth");
Object.defineProperty(exports, "useMsalAuth", { enumerable: true, get: function () { return __importDefault(useMsalAuth_1).default; } });
