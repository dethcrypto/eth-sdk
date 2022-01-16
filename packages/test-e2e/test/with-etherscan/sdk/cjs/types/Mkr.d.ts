import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MkrInterface extends utils.Interface {
    contractName: "Mkr";
    functions: {
        "name()": FunctionFragment;
        "stop()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "setName(bytes32)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "stopped()": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "symbol()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "push(address,uint256)": FunctionFragment;
        "move(address,address,uint256)": FunctionFragment;
        "start()": FunctionFragment;
        "authority()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "pull(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "stop", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setName", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "push", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "move", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "start", values?: undefined): string;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "pull", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
    events: {
        "Mint(address,uint256)": EventFragment;
        "Burn(address,uint256)": EventFragment;
        "LogSetAuthority(address)": EventFragment;
        "LogSetOwner(address)": EventFragment;
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
}
export declare type MintEvent = TypedEvent<[
    string,
    BigNumber
], {
    guy: string;
    wad: BigNumber;
}>;
export declare type MintEventFilter = TypedEventFilter<MintEvent>;
export declare type BurnEvent = TypedEvent<[
    string,
    BigNumber
], {
    guy: string;
    wad: BigNumber;
}>;
export declare type BurnEventFilter = TypedEventFilter<BurnEvent>;
export declare type LogSetAuthorityEvent = TypedEvent<[string], {
    authority: string;
}>;
export declare type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;
export declare type LogSetOwnerEvent = TypedEvent<[string], {
    owner: string;
}>;
export declare type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;
export declare type LogNoteEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], {
    sig: string;
    guy: string;
    foo: string;
    bar: string;
    wad: BigNumber;
    fax: string;
}>;
export declare type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    value: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    spender: string;
    value: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface Mkr extends BaseContract {
    contractName: "Mkr";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MkrInterface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "approve(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "approve(address)"(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        "mint(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "mint(uint256)"(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "burn(uint256)"(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "burn(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setName(name_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(src: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stopped(overrides?: CallOverrides): Promise<[boolean]>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        push(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        start(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        authority(overrides?: CallOverrides): Promise<[string]>;
        allowance(src: string, guy: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pull(src: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    stop(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "approve(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "approve(address)"(guy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(owner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    "mint(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "mint(uint256)"(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "burn(uint256)"(wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "burn(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setName(name_: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(src: string, overrides?: CallOverrides): Promise<BigNumber>;
    stopped(overrides?: CallOverrides): Promise<boolean>;
    setAuthority(authority_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    symbol(overrides?: CallOverrides): Promise<string>;
    transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    push(dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    start(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    authority(overrides?: CallOverrides): Promise<string>;
    allowance(src: string, guy: string, overrides?: CallOverrides): Promise<BigNumber>;
    pull(src: string, wad: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        stop(overrides?: CallOverrides): Promise<void>;
        "approve(address,uint256)"(guy: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "approve(address)"(guy: string, overrides?: CallOverrides): Promise<boolean>;
        setOwner(owner_: string, overrides?: CallOverrides): Promise<void>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        "mint(address,uint256)"(guy: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "mint(uint256)"(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "burn(uint256)"(wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "burn(address,uint256)"(guy: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setName(name_: BytesLike, overrides?: CallOverrides): Promise<void>;
        balanceOf(src: string, overrides?: CallOverrides): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<boolean>;
        setAuthority(authority_: string, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        symbol(overrides?: CallOverrides): Promise<string>;
        transfer(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        push(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        move(src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        start(overrides?: CallOverrides): Promise<void>;
        authority(overrides?: CallOverrides): Promise<string>;
        allowance(src: string, guy: string, overrides?: CallOverrides): Promise<BigNumber>;
        pull(src: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Mint(address,uint256)"(guy?: string | null, wad?: null): MintEventFilter;
        Mint(guy?: string | null, wad?: null): MintEventFilter;
        "Burn(address,uint256)"(guy?: string | null, wad?: null): BurnEventFilter;
        Burn(guy?: string | null, wad?: null): BurnEventFilter;
        "LogSetAuthority(address)"(authority?: string | null): LogSetAuthorityEventFilter;
        LogSetAuthority(authority?: string | null): LogSetAuthorityEventFilter;
        "LogSetOwner(address)"(owner?: string | null): LogSetOwnerEventFilter;
        LogSetOwner(owner?: string | null): LogSetOwnerEventFilter;
        "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)"(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        LogNote(sig?: BytesLike | null, guy?: string | null, foo?: BytesLike | null, bar?: BytesLike | null, wad?: null, fax?: null): LogNoteEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
    };
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "approve(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "approve(address)"(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        "mint(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "mint(uint256)"(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "burn(uint256)"(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "burn(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setName(name_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(src: string, overrides?: CallOverrides): Promise<BigNumber>;
        stopped(overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        push(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        start(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(src: string, guy: string, overrides?: CallOverrides): Promise<BigNumber>;
        pull(src: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stop(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "approve(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "approve(address)"(guy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "mint(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "mint(uint256)"(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "burn(uint256)"(wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "burn(address,uint256)"(guy: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setName(name_: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(src: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stopped(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(authority_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        push(dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        start(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(src: string, guy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pull(src: string, wad: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
