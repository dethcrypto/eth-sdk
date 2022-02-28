import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { GraphToken, GraphTokenInterface } from "../GraphToken";
export declare class GraphToken__factory {
    static readonly abi: ({
        inputs: any[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
    })[];
    static createInterface(): GraphTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GraphToken;
}
