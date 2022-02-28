import { Signer } from 'ethers';
import * as types from './types';
export declare function getContract(address: string, abi: object, defaultSigner: Signer): any;
export declare type OptimismSdk = ReturnType<typeof getOptimismSdk>;
export declare function getOptimismSdk(defaultSigner: Signer): {
    weth: types.Weth;
};
export declare type PolygonSdk = ReturnType<typeof getPolygonSdk>;
export declare function getPolygonSdk(defaultSigner: Signer): {
    weth: types.Weth;
};
export declare type BscSdk = ReturnType<typeof getBscSdk>;
export declare function getBscSdk(defaultSigner: Signer): {
    WBNB: types.WBNB;
};
export declare type OperaSdk = ReturnType<typeof getOperaSdk>;
export declare function getOperaSdk(defaultSigner: Signer): {
    chainLink: types.ChainLink;
};
export declare type HecoSdk = ReturnType<typeof getHecoSdk>;
export declare function getHecoSdk(defaultSigner: Signer): {
    HBTC: types.HBTC;
};
export declare type AvalancheSdk = ReturnType<typeof getAvalancheSdk>;
export declare function getAvalancheSdk(defaultSigner: Signer): {
    WAVAX: types.WAVAX;
};
export declare type ArbitrumOneSdk = ReturnType<typeof getArbitrumOneSdk>;
export declare function getArbitrumOneSdk(defaultSigner: Signer): {
    GraphToken: types.GraphToken;
};
