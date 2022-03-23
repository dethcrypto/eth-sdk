import { Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSigner: Signer): any;
export declare type MainnetSdk = ReturnType<typeof getMainnetSdk>;
export declare function getMainnetSdk(defaultSigner: Signer): {
    tokens: {
        dai: types.mainnet.tokens.Dai;
        mkr: types.mainnet.tokens.Mkr;
    };
    uniswap: types.mainnet.Uniswap;
    proxies: {
        proxyStandardStorageSlot: types.mainnet.proxies.ProxyStandardStorageSlot;
        proxyCustomImplementation: types.mainnet.proxies.ProxyCustomImplementation;
    };
};
