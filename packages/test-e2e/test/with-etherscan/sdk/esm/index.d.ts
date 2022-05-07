import { providers, Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSignerOrProvider: Signer | providers.Provider): any;
export declare type MainnetSdk = ReturnType<typeof getMainnetSdk>;
export declare function getMainnetSdk(defaultSignerOrProvider: Signer | providers.Provider): {
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
