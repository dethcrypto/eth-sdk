import { Contract } from 'ethers';
import optimismWethAbi from '../../eth-sdk/abis/optimism/weth.json';
import polygonWethAbi from '../../eth-sdk/abis/polygon/weth.json';
import bscWBNBAbi from '../../eth-sdk/abis/bsc/WBNB.json';
import operaChainLinkAbi from '../../eth-sdk/abis/opera/chainLink.json';
import hecoHBTCAbi from '../../eth-sdk/abis/heco/HBTC.json';
import avalancheWAVAXAbi from '../../eth-sdk/abis/avalanche/WAVAX.json';
import arbitrumOneGraphTokenAbi from '../../eth-sdk/abis/arbitrumOne/GraphToken.json';
export function getContract(address, abi, defaultSigner) {
    return new Contract(address, abi, defaultSigner);
}
export function getOptimismSdk(defaultSigner) {
    return {
        "weth": getContract('0x4200000000000000000000000000000000000006', optimismWethAbi, defaultSigner),
    };
}
export function getPolygonSdk(defaultSigner) {
    return {
        "weth": getContract('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', polygonWethAbi, defaultSigner),
    };
}
export function getBscSdk(defaultSigner) {
    return {
        "WBNB": getContract('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', bscWBNBAbi, defaultSigner),
    };
}
export function getOperaSdk(defaultSigner) {
    return {
        "chainLink": getContract('0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8', operaChainLinkAbi, defaultSigner),
    };
}
export function getHecoSdk(defaultSigner) {
    return {
        "HBTC": getContract('0x66a79d23e58475d2738179ca52cd0b41d73f0bea', hecoHBTCAbi, defaultSigner),
    };
}
export function getAvalancheSdk(defaultSigner) {
    return {
        "WAVAX": getContract('0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', avalancheWAVAXAbi, defaultSigner),
    };
}
export function getArbitrumOneSdk(defaultSigner) {
    return {
        "GraphToken": getContract('0x23a941036ae778ac51ab04cea08ed6e2fe103614', arbitrumOneGraphTokenAbi, defaultSigner),
    };
}
