"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainnetSdk = exports.getContract = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const ethers_1 = require("ethers");
function getContract(address, abiPath, defaultSigner) {
    const abi = JSON.parse(fs_1.readFileSync(path_1.join(__dirname, '../../../eth-sdk/abis/' + abiPath + '.json'), 'utf-8'));
    return new ethers_1.Contract(address, abi, defaultSigner);
}
exports.getContract = getContract;
async function getMainnetSdk(defaultSigner) {
    return {
        "tokens": {
            "dai": getContract('0x6B175474E89094C44Da98b954EedeAC495271d0F', 'mainnet/tokens/dai', defaultSigner),
            "mkr": getContract('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', 'mainnet/tokens/mkr', defaultSigner),
        },
        "uniswap": getContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', 'mainnet/uniswap', defaultSigner),
    };
}
exports.getMainnetSdk = getMainnetSdk;
