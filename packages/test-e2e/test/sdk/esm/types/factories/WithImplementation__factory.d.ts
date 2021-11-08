import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { WithImplementation, WithImplementationInterface } from "../WithImplementation";
export declare class WithImplementation__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    static createInterface(): WithImplementationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithImplementation;
}
