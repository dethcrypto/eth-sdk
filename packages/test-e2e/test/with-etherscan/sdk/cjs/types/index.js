"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.Uniswap__factory = exports.Mkr__factory = exports.Dai__factory = exports.ProxyStandardStorageSlot__factory = exports.ProxyCustomImplementation__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var ProxyCustomImplementation__factory_1 = require("./factories/mainnet/proxies/ProxyCustomImplementation__factory");
Object.defineProperty(exports, "ProxyCustomImplementation__factory", { enumerable: true, get: function () { return ProxyCustomImplementation__factory_1.ProxyCustomImplementation__factory; } });
var ProxyStandardStorageSlot__factory_1 = require("./factories/mainnet/proxies/ProxyStandardStorageSlot__factory");
Object.defineProperty(exports, "ProxyStandardStorageSlot__factory", { enumerable: true, get: function () { return ProxyStandardStorageSlot__factory_1.ProxyStandardStorageSlot__factory; } });
var Dai__factory_1 = require("./factories/mainnet/tokens/Dai__factory");
Object.defineProperty(exports, "Dai__factory", { enumerable: true, get: function () { return Dai__factory_1.Dai__factory; } });
var Mkr__factory_1 = require("./factories/mainnet/tokens/Mkr__factory");
Object.defineProperty(exports, "Mkr__factory", { enumerable: true, get: function () { return Mkr__factory_1.Mkr__factory; } });
var Uniswap__factory_1 = require("./factories/mainnet/Uniswap__factory");
Object.defineProperty(exports, "Uniswap__factory", { enumerable: true, get: function () { return Uniswap__factory_1.Uniswap__factory; } });
