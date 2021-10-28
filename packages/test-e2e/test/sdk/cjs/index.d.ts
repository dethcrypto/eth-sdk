import { Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSigner: Signer): any;
export declare type MainnetSdk = ReturnType<typeof getMainnetSdk>;
export declare function getMainnetSdk(defaultSigner: Signer): {
    tokens: {
        dai: types.Dai;
        mkr: types.Mkr;
    };
    uniswap: types.Uniswap;
};
