"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainnetSdk = exports.getContract = void 0;
const ethers_1 = require("ethers");
const dai_json_1 = __importDefault(require("../../../eth-sdk/abis/mainnet/tokens/dai.json"));
const mkr_json_1 = __importDefault(require("../../../eth-sdk/abis/mainnet/tokens/mkr.json"));
const uniswap_json_1 = __importDefault(require("../../../eth-sdk/abis/mainnet/uniswap.json"));
const proxyStandardStorageSlot_json_1 = __importDefault(require("../../../eth-sdk/abis/mainnet/proxies/proxyStandardStorageSlot.json"));
const proxyCustomImplementation_json_1 = __importDefault(require("../../../eth-sdk/abis/mainnet/proxies/proxyCustomImplementation.json"));
function getContract(address, abi, defaultSigner) {
    return new ethers_1.Contract(address, abi, defaultSigner);
}
exports.getContract = getContract;
function getMainnetSdk(defaultSigner) {
    return {
        "tokens": {
            "dai": getContract('0x6B175474E89094C44Da98b954EedeAC495271d0F', dai_json_1.default, defaultSigner),
            "mkr": getContract('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', mkr_json_1.default, defaultSigner),
        },
        "uniswap": getContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', uniswap_json_1.default, defaultSigner),
        "proxies": {
            "proxyStandardStorageSlot": getContract('0x1c5a768bdb10750f9007e33243fef5f3e094ad3a', proxyStandardStorageSlot_json_1.default, defaultSigner),
            "proxyCustomImplementation": getContract('0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b', proxyCustomImplementation_json_1.default, defaultSigner),
        },
    };
}
exports.getMainnetSdk = getMainnetSdk;
