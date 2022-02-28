"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArbitrumOneSdk = exports.getAvalancheSdk = exports.getHecoSdk = exports.getOperaSdk = exports.getBscSdk = exports.getPolygonSdk = exports.getOptimismSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const weth_json_1 = __importDefault(require("../../eth-sdk/abis/optimism/weth.json"));
const weth_json_2 = __importDefault(require("../../eth-sdk/abis/polygon/weth.json"));
const WBNB_json_1 = __importDefault(require("../../eth-sdk/abis/bsc/WBNB.json"));
const chainLink_json_1 = __importDefault(require("../../eth-sdk/abis/opera/chainLink.json"));
const HBTC_json_1 = __importDefault(require("../../eth-sdk/abis/heco/HBTC.json"));
const WAVAX_json_1 = __importDefault(require("../../eth-sdk/abis/avalanche/WAVAX.json"));
const GraphToken_json_1 = __importDefault(require("../../eth-sdk/abis/arbitrumOne/GraphToken.json"));
function getContract(address, abi, defaultSigner) {
    return new ethers_1.Contract(address, abi, defaultSigner);
}
exports.getContract = getContract;
function getOptimismSdk(defaultSigner) {
    return {
        "weth": getContract('0x4200000000000000000000000000000000000006', weth_json_1.default, defaultSigner),
    };
}
exports.getOptimismSdk = getOptimismSdk;
function getPolygonSdk(defaultSigner) {
    return {
        "weth": getContract('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', weth_json_2.default, defaultSigner),
    };
}
exports.getPolygonSdk = getPolygonSdk;
function getBscSdk(defaultSigner) {
    return {
        "WBNB": getContract('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', WBNB_json_1.default, defaultSigner),
    };
}
exports.getBscSdk = getBscSdk;
function getOperaSdk(defaultSigner) {
    return {
        "chainLink": getContract('0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8', chainLink_json_1.default, defaultSigner),
    };
}
exports.getOperaSdk = getOperaSdk;
function getHecoSdk(defaultSigner) {
    return {
        "HBTC": getContract('0x66a79d23e58475d2738179ca52cd0b41d73f0bea', HBTC_json_1.default, defaultSigner),
    };
}
exports.getHecoSdk = getHecoSdk;
function getAvalancheSdk(defaultSigner) {
    return {
        "WAVAX": getContract('0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', WAVAX_json_1.default, defaultSigner),
    };
}
exports.getAvalancheSdk = getAvalancheSdk;
function getArbitrumOneSdk(defaultSigner) {
    return {
        "GraphToken": getContract('0x23a941036ae778ac51ab04cea08ed6e2fe103614', GraphToken_json_1.default, defaultSigner),
    };
}
exports.getArbitrumOneSdk = getArbitrumOneSdk;
