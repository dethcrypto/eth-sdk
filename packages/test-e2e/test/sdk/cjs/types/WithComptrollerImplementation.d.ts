import { ethers, Signer, BigNumber, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface WithComptrollerImplementationInterface extends ethers.utils.Interface {
    functions: {
        "pendingAdmin()": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "comptrollerImplementation()": FunctionFragment;
        "_acceptImplementation()": FunctionFragment;
        "pendingComptrollerImplementation()": FunctionFragment;
        "_setPendingImplementation(address)": FunctionFragment;
        "_acceptAdmin()": FunctionFragment;
        "admin()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_acceptImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingComptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPendingImplementation", values: [string]): string;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingComptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    events: {
        "NewPendingImplementation(address,address)": EventFragment;
        "NewImplementation(address,address)": EventFragment;
        "NewPendingAdmin(address,address)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "Failure(uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewPendingImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPendingAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
}
export declare type NewPendingImplementationEvent = TypedEvent<[
    string,
    string
], {
    oldPendingImplementation: string;
    newPendingImplementation: string;
}>;
export declare type NewPendingImplementationEventFilter = TypedEventFilter<NewPendingImplementationEvent>;
export declare type NewImplementationEvent = TypedEvent<[
    string,
    string
], {
    oldImplementation: string;
    newImplementation: string;
}>;
export declare type NewImplementationEventFilter = TypedEventFilter<NewImplementationEvent>;
export declare type NewPendingAdminEvent = TypedEvent<[
    string,
    string
], {
    oldPendingAdmin: string;
    newPendingAdmin: string;
}>;
export declare type NewPendingAdminEventFilter = TypedEventFilter<NewPendingAdminEvent>;
export declare type NewAdminEvent = TypedEvent<[
    string,
    string
], {
    oldAdmin: string;
    newAdmin: string;
}>;
export declare type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export declare type FailureEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], {
    error: BigNumber;
    info: BigNumber;
    detail: BigNumber;
}>;
export declare type FailureEventFilter = TypedEventFilter<FailureEvent>;
export interface WithComptrollerImplementation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WithComptrollerImplementationInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        _acceptImplementation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        _setPendingImplementation(newPendingImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
    };
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    _acceptImplementation(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    _setPendingImplementation(newPendingImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    _acceptAdmin(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        _acceptImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        _setPendingImplementation(newPendingImplementation: string, overrides?: CallOverrides): Promise<BigNumber>;
        _acceptAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "NewPendingImplementation(address,address)"(oldPendingImplementation?: null, newPendingImplementation?: null): NewPendingImplementationEventFilter;
        NewPendingImplementation(oldPendingImplementation?: null, newPendingImplementation?: null): NewPendingImplementationEventFilter;
        "NewImplementation(address,address)"(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        NewImplementation(oldImplementation?: null, newImplementation?: null): NewImplementationEventFilter;
        "NewPendingAdmin(address,address)"(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        NewPendingAdmin(oldPendingAdmin?: null, newPendingAdmin?: null): NewPendingAdminEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "Failure(uint256,uint256,uint256)"(error?: null, info?: null, detail?: null): FailureEventFilter;
        Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
    };
    estimateGas: {
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        _acceptImplementation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        _setPendingImplementation(newPendingImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _acceptImplementation(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setPendingImplementation(newPendingImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        _acceptAdmin(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
