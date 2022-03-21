import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface ProxyStandardStorageSlotInterface extends utils.Interface {
    functions: {
        "advance()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "allowanceCoupons(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "approveCoupons(address,uint256)": FunctionFragment;
        "approveFor(address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfBonded(address)": FunctionFragment;
        "balanceOfCoupons(address,uint256)": FunctionFragment;
        "balanceOfStaged(address)": FunctionFragment;
        "bond(uint256)": FunctionFragment;
        "bootstrappingAt(uint256)": FunctionFragment;
        "calculatePrice()": FunctionFragment;
        "calculateReward()": FunctionFragment;
        "commit(address)": FunctionFragment;
        "couponPremium(uint256)": FunctionFragment;
        "couponsExpiration(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "dollar()": FunctionFragment;
        "emergencyCommit(address)": FunctionFragment;
        "epoch()": FunctionFragment;
        "epochTime()": FunctionFragment;
        "expiringCoupons(uint256)": FunctionFragment;
        "expiringCouponsAtIndex(uint256,uint256)": FunctionFragment;
        "fluidUntil(address)": FunctionFragment;
        "implementation()": FunctionFragment;
        "initialize()": FunctionFragment;
        "isInitialized(address)": FunctionFragment;
        "isNominated(address)": FunctionFragment;
        "lockedUntil(address)": FunctionFragment;
        "name()": FunctionFragment;
        "oracle()": FunctionFragment;
        "outstandingCoupons(uint256)": FunctionFragment;
        "periodFor(address)": FunctionFragment;
        "pool()": FunctionFragment;
        "purchaseCoupons(uint256)": FunctionFragment;
        "recordedVote(address,address)": FunctionFragment;
        "redeemCoupons(uint256,uint256)": FunctionFragment;
        "rejectFor(address)": FunctionFragment;
        "startFor(address)": FunctionFragment;
        "statusOf(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalBonded()": FunctionFragment;
        "totalBondedAt(uint256)": FunctionFragment;
        "totalCoupons()": FunctionFragment;
        "totalDebt()": FunctionFragment;
        "totalNet()": FunctionFragment;
        "totalRedeemable()": FunctionFragment;
        "totalStaged()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferCoupons(address,address,uint256,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unbond(uint256)": FunctionFragment;
        "unbondUnderlying(uint256)": FunctionFragment;
        "vote(address,uint8)": FunctionFragment;
        "votesFor(address)": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "advance" | "allowance" | "allowanceCoupons" | "approve" | "approveCoupons" | "approveFor" | "balanceOf" | "balanceOfBonded" | "balanceOfCoupons" | "balanceOfStaged" | "bond" | "bootstrappingAt" | "calculatePrice" | "calculateReward" | "commit" | "couponPremium" | "couponsExpiration" | "decimals" | "deposit" | "dollar" | "emergencyCommit" | "epoch" | "epochTime" | "expiringCoupons" | "expiringCouponsAtIndex" | "fluidUntil" | "implementation" | "initialize" | "isInitialized" | "isNominated" | "lockedUntil" | "name" | "oracle" | "outstandingCoupons" | "periodFor" | "pool" | "purchaseCoupons" | "recordedVote" | "redeemCoupons" | "rejectFor" | "startFor" | "statusOf" | "symbol" | "totalBonded" | "totalBondedAt" | "totalCoupons" | "totalDebt" | "totalNet" | "totalRedeemable" | "totalStaged" | "totalSupply" | "transfer" | "transferCoupons" | "transferFrom" | "unbond" | "unbondUnderlying" | "vote" | "votesFor" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "advance", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "allowanceCoupons", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveCoupons", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "approveFor", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfBonded", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfCoupons", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfStaged", values: [string]): string;
    encodeFunctionData(functionFragment: "bond", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "bootstrappingAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculatePrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "commit", values: [string]): string;
    encodeFunctionData(functionFragment: "couponPremium", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "couponsExpiration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dollar", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyCommit", values: [string]): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "expiringCoupons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "expiringCouponsAtIndex", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fluidUntil", values: [string]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isInitialized", values: [string]): string;
    encodeFunctionData(functionFragment: "isNominated", values: [string]): string;
    encodeFunctionData(functionFragment: "lockedUntil", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "outstandingCoupons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "periodFor", values: [string]): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "purchaseCoupons", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "recordedVote", values: [string, string]): string;
    encodeFunctionData(functionFragment: "redeemCoupons", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rejectFor", values: [string]): string;
    encodeFunctionData(functionFragment: "startFor", values: [string]): string;
    encodeFunctionData(functionFragment: "statusOf", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBonded", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBondedAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalCoupons", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalNet", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalRedeemable", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalStaged", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferCoupons", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "unbond", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unbondUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "vote", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "votesFor", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "advance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowanceCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBonded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfStaged", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bootstrappingAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculatePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "couponPremium", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "couponsExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dollar", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyCommit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expiringCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expiringCouponsAtIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fluidUntil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isNominated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedUntil", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "outstandingCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchaseCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordedVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rejectFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "statusOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBonded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBondedAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalNet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalRedeemable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStaged", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferCoupons", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbondUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votesFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Advance(uint256,uint256,uint256)": EventFragment;
        "Bond(address,uint256,uint256,uint256)": EventFragment;
        "Commit(address,address)": EventFragment;
        "CouponApproval(address,address,uint256)": EventFragment;
        "CouponExpiration(uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "CouponPurchase(address,uint256,uint256,uint256)": EventFragment;
        "CouponRedemption(address,uint256,uint256)": EventFragment;
        "CouponTransfer(address,address,uint256,uint256)": EventFragment;
        "Deposit(address,uint256)": EventFragment;
        "Incentivization(address,uint256)": EventFragment;
        "Proposal(address,address,uint256,uint256)": EventFragment;
        "SupplyDecrease(uint256,uint256,uint256)": EventFragment;
        "SupplyIncrease(uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "SupplyNeutral(uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unbond(address,uint256,uint256,uint256)": EventFragment;
        "Upgraded(address)": EventFragment;
        "Vote(address,address,uint8,uint256)": EventFragment;
        "Withdraw(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Advance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Bond"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Commit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CouponApproval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CouponExpiration"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CouponPurchase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CouponRedemption"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CouponTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Incentivization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Proposal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SupplyDecrease"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SupplyIncrease"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SupplyNeutral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unbond"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Vote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface AdvanceEventObject {
    epoch: BigNumber;
    block: BigNumber;
    timestamp: BigNumber;
}
export declare type AdvanceEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], AdvanceEventObject>;
export declare type AdvanceEventFilter = TypedEventFilter<AdvanceEvent>;
export interface BondEventObject {
    account: string;
    start: BigNumber;
    value: BigNumber;
    valueUnderlying: BigNumber;
}
export declare type BondEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], BondEventObject>;
export declare type BondEventFilter = TypedEventFilter<BondEvent>;
export interface CommitEventObject {
    account: string;
    candidate: string;
}
export declare type CommitEvent = TypedEvent<[string, string], CommitEventObject>;
export declare type CommitEventFilter = TypedEventFilter<CommitEvent>;
export interface CouponApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export declare type CouponApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], CouponApprovalEventObject>;
export declare type CouponApprovalEventFilter = TypedEventFilter<CouponApprovalEvent>;
export interface CouponExpirationEventObject {
    epoch: BigNumber;
    couponsExpired: BigNumber;
    lessRedeemable: BigNumber;
    lessDebt: BigNumber;
    newBonded: BigNumber;
}
export declare type CouponExpirationEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], CouponExpirationEventObject>;
export declare type CouponExpirationEventFilter = TypedEventFilter<CouponExpirationEvent>;
export interface CouponPurchaseEventObject {
    account: string;
    epoch: BigNumber;
    dollarAmount: BigNumber;
    couponAmount: BigNumber;
}
export declare type CouponPurchaseEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], CouponPurchaseEventObject>;
export declare type CouponPurchaseEventFilter = TypedEventFilter<CouponPurchaseEvent>;
export interface CouponRedemptionEventObject {
    account: string;
    epoch: BigNumber;
    couponAmount: BigNumber;
}
export declare type CouponRedemptionEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CouponRedemptionEventObject>;
export declare type CouponRedemptionEventFilter = TypedEventFilter<CouponRedemptionEvent>;
export interface CouponTransferEventObject {
    from: string;
    to: string;
    epoch: BigNumber;
    value: BigNumber;
}
export declare type CouponTransferEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], CouponTransferEventObject>;
export declare type CouponTransferEventFilter = TypedEventFilter<CouponTransferEvent>;
export interface DepositEventObject {
    account: string;
    value: BigNumber;
}
export declare type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;
export declare type DepositEventFilter = TypedEventFilter<DepositEvent>;
export interface IncentivizationEventObject {
    account: string;
    amount: BigNumber;
}
export declare type IncentivizationEvent = TypedEvent<[
    string,
    BigNumber
], IncentivizationEventObject>;
export declare type IncentivizationEventFilter = TypedEventFilter<IncentivizationEvent>;
export interface ProposalEventObject {
    candidate: string;
    account: string;
    start: BigNumber;
    period: BigNumber;
}
export declare type ProposalEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], ProposalEventObject>;
export declare type ProposalEventFilter = TypedEventFilter<ProposalEvent>;
export interface SupplyDecreaseEventObject {
    epoch: BigNumber;
    price: BigNumber;
    newDebt: BigNumber;
}
export declare type SupplyDecreaseEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], SupplyDecreaseEventObject>;
export declare type SupplyDecreaseEventFilter = TypedEventFilter<SupplyDecreaseEvent>;
export interface SupplyIncreaseEventObject {
    epoch: BigNumber;
    price: BigNumber;
    newRedeemable: BigNumber;
    lessDebt: BigNumber;
    newBonded: BigNumber;
}
export declare type SupplyIncreaseEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], SupplyIncreaseEventObject>;
export declare type SupplyIncreaseEventFilter = TypedEventFilter<SupplyIncreaseEvent>;
export interface SupplyNeutralEventObject {
    epoch: BigNumber;
}
export declare type SupplyNeutralEvent = TypedEvent<[
    BigNumber
], SupplyNeutralEventObject>;
export declare type SupplyNeutralEventFilter = TypedEventFilter<SupplyNeutralEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnbondEventObject {
    account: string;
    start: BigNumber;
    value: BigNumber;
    valueUnderlying: BigNumber;
}
export declare type UnbondEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], UnbondEventObject>;
export declare type UnbondEventFilter = TypedEventFilter<UnbondEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface VoteEventObject {
    account: string;
    candidate: string;
    vote: number;
    bonded: BigNumber;
}
export declare type VoteEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber
], VoteEventObject>;
export declare type VoteEventFilter = TypedEventFilter<VoteEvent>;
export interface WithdrawEventObject {
    account: string;
    value: BigNumber;
}
export declare type WithdrawEvent = TypedEvent<[
    string,
    BigNumber
], WithdrawEventObject>;
export declare type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface ProxyStandardStorageSlot extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyStandardStorageSlotInterface;
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
        advance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        allowanceCoupons(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveCoupons(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveFor(candidate: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBonded(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfCoupons(account: string, epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfStaged(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        bond(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bootstrappingAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        calculatePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateReward(overrides?: CallOverrides): Promise<[BigNumber]>;
        commit(candidate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        couponPremium(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        couponsExpiration(epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        deposit(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        dollar(overrides?: CallOverrides): Promise<[string]>;
        emergencyCommit(candidate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        epoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        epochTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        expiringCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        expiringCouponsAtIndex(epoch: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        fluidUntil(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        implementation(overrides?: CallOverrides): Promise<[string] & {
            impl: string;
        }>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isInitialized(candidate: string, overrides?: CallOverrides): Promise<[boolean]>;
        isNominated(candidate: string, overrides?: CallOverrides): Promise<[boolean]>;
        lockedUntil(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        outstandingCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        periodFor(candidate: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        purchaseCoupons(dollarAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        recordedVote(account: string, candidate: string, overrides?: CallOverrides): Promise<[number]>;
        redeemCoupons(couponEpoch: BigNumberish, couponAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rejectFor(candidate: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        startFor(candidate: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        statusOf(account: string, overrides?: CallOverrides): Promise<[number]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalBonded(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBondedAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalCoupons(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalNet(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalRedeemable(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalStaged(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferCoupons(sender: string, recipient: string, epoch: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unbond(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unbondUnderlying(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        vote(candidate: string, vote: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        votesFor(candidate: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    advance(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    allowanceCoupons(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveCoupons(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBonded(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfCoupons(account: string, epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfStaged(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    bond(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bootstrappingAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    calculatePrice(overrides?: CallOverrides): Promise<BigNumber>;
    calculateReward(overrides?: CallOverrides): Promise<BigNumber>;
    commit(candidate: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    couponPremium(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    couponsExpiration(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    deposit(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    dollar(overrides?: CallOverrides): Promise<string>;
    emergencyCommit(candidate: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    epoch(overrides?: CallOverrides): Promise<BigNumber>;
    epochTime(overrides?: CallOverrides): Promise<BigNumber>;
    expiringCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    expiringCouponsAtIndex(epoch: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    fluidUntil(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    implementation(overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isInitialized(candidate: string, overrides?: CallOverrides): Promise<boolean>;
    isNominated(candidate: string, overrides?: CallOverrides): Promise<boolean>;
    lockedUntil(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    oracle(overrides?: CallOverrides): Promise<string>;
    outstandingCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    periodFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
    pool(overrides?: CallOverrides): Promise<string>;
    purchaseCoupons(dollarAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    recordedVote(account: string, candidate: string, overrides?: CallOverrides): Promise<number>;
    redeemCoupons(couponEpoch: BigNumberish, couponAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rejectFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
    startFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
    statusOf(account: string, overrides?: CallOverrides): Promise<number>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalBonded(overrides?: CallOverrides): Promise<BigNumber>;
    totalBondedAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalCoupons(overrides?: CallOverrides): Promise<BigNumber>;
    totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
    totalNet(overrides?: CallOverrides): Promise<BigNumber>;
    totalRedeemable(overrides?: CallOverrides): Promise<BigNumber>;
    totalStaged(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferCoupons(sender: string, recipient: string, epoch: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unbond(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unbondUnderlying(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    vote(candidate: string, vote: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    votesFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        advance(overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowanceCoupons(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        approveCoupons(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        approveFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBonded(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfCoupons(account: string, epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfStaged(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        bond(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bootstrappingAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        calculatePrice(overrides?: CallOverrides): Promise<BigNumber>;
        calculateReward(overrides?: CallOverrides): Promise<BigNumber>;
        commit(candidate: string, overrides?: CallOverrides): Promise<void>;
        couponPremium(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        couponsExpiration(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        deposit(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        dollar(overrides?: CallOverrides): Promise<string>;
        emergencyCommit(candidate: string, overrides?: CallOverrides): Promise<void>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochTime(overrides?: CallOverrides): Promise<BigNumber>;
        expiringCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        expiringCouponsAtIndex(epoch: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fluidUntil(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isInitialized(candidate: string, overrides?: CallOverrides): Promise<boolean>;
        isNominated(candidate: string, overrides?: CallOverrides): Promise<boolean>;
        lockedUntil(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        oracle(overrides?: CallOverrides): Promise<string>;
        outstandingCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        periodFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<string>;
        purchaseCoupons(dollarAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        recordedVote(account: string, candidate: string, overrides?: CallOverrides): Promise<number>;
        redeemCoupons(couponEpoch: BigNumberish, couponAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        rejectFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        startFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        statusOf(account: string, overrides?: CallOverrides): Promise<number>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalBonded(overrides?: CallOverrides): Promise<BigNumber>;
        totalBondedAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalCoupons(overrides?: CallOverrides): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        totalNet(overrides?: CallOverrides): Promise<BigNumber>;
        totalRedeemable(overrides?: CallOverrides): Promise<BigNumber>;
        totalStaged(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferCoupons(sender: string, recipient: string, epoch: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        unbond(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unbondUnderlying(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        vote(candidate: string, vote: BigNumberish, overrides?: CallOverrides): Promise<void>;
        votesFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Advance(uint256,uint256,uint256)"(epoch?: BigNumberish | null, block?: null, timestamp?: null): AdvanceEventFilter;
        Advance(epoch?: BigNumberish | null, block?: null, timestamp?: null): AdvanceEventFilter;
        "Bond(address,uint256,uint256,uint256)"(account?: string | null, start?: null, value?: null, valueUnderlying?: null): BondEventFilter;
        Bond(account?: string | null, start?: null, value?: null, valueUnderlying?: null): BondEventFilter;
        "Commit(address,address)"(account?: string | null, candidate?: string | null): CommitEventFilter;
        Commit(account?: string | null, candidate?: string | null): CommitEventFilter;
        "CouponApproval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): CouponApprovalEventFilter;
        CouponApproval(owner?: string | null, spender?: string | null, value?: null): CouponApprovalEventFilter;
        "CouponExpiration(uint256,uint256,uint256,uint256,uint256)"(epoch?: BigNumberish | null, couponsExpired?: null, lessRedeemable?: null, lessDebt?: null, newBonded?: null): CouponExpirationEventFilter;
        CouponExpiration(epoch?: BigNumberish | null, couponsExpired?: null, lessRedeemable?: null, lessDebt?: null, newBonded?: null): CouponExpirationEventFilter;
        "CouponPurchase(address,uint256,uint256,uint256)"(account?: string | null, epoch?: BigNumberish | null, dollarAmount?: null, couponAmount?: null): CouponPurchaseEventFilter;
        CouponPurchase(account?: string | null, epoch?: BigNumberish | null, dollarAmount?: null, couponAmount?: null): CouponPurchaseEventFilter;
        "CouponRedemption(address,uint256,uint256)"(account?: string | null, epoch?: BigNumberish | null, couponAmount?: null): CouponRedemptionEventFilter;
        CouponRedemption(account?: string | null, epoch?: BigNumberish | null, couponAmount?: null): CouponRedemptionEventFilter;
        "CouponTransfer(address,address,uint256,uint256)"(from?: string | null, to?: string | null, epoch?: BigNumberish | null, value?: null): CouponTransferEventFilter;
        CouponTransfer(from?: string | null, to?: string | null, epoch?: BigNumberish | null, value?: null): CouponTransferEventFilter;
        "Deposit(address,uint256)"(account?: string | null, value?: null): DepositEventFilter;
        Deposit(account?: string | null, value?: null): DepositEventFilter;
        "Incentivization(address,uint256)"(account?: string | null, amount?: null): IncentivizationEventFilter;
        Incentivization(account?: string | null, amount?: null): IncentivizationEventFilter;
        "Proposal(address,address,uint256,uint256)"(candidate?: string | null, account?: string | null, start?: BigNumberish | null, period?: null): ProposalEventFilter;
        Proposal(candidate?: string | null, account?: string | null, start?: BigNumberish | null, period?: null): ProposalEventFilter;
        "SupplyDecrease(uint256,uint256,uint256)"(epoch?: BigNumberish | null, price?: null, newDebt?: null): SupplyDecreaseEventFilter;
        SupplyDecrease(epoch?: BigNumberish | null, price?: null, newDebt?: null): SupplyDecreaseEventFilter;
        "SupplyIncrease(uint256,uint256,uint256,uint256,uint256)"(epoch?: BigNumberish | null, price?: null, newRedeemable?: null, lessDebt?: null, newBonded?: null): SupplyIncreaseEventFilter;
        SupplyIncrease(epoch?: BigNumberish | null, price?: null, newRedeemable?: null, lessDebt?: null, newBonded?: null): SupplyIncreaseEventFilter;
        "SupplyNeutral(uint256)"(epoch?: BigNumberish | null): SupplyNeutralEventFilter;
        SupplyNeutral(epoch?: BigNumberish | null): SupplyNeutralEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unbond(address,uint256,uint256,uint256)"(account?: string | null, start?: null, value?: null, valueUnderlying?: null): UnbondEventFilter;
        Unbond(account?: string | null, start?: null, value?: null, valueUnderlying?: null): UnbondEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "Vote(address,address,uint8,uint256)"(account?: string | null, candidate?: string | null, vote?: null, bonded?: null): VoteEventFilter;
        Vote(account?: string | null, candidate?: string | null, vote?: null, bonded?: null): VoteEventFilter;
        "Withdraw(address,uint256)"(account?: string | null, value?: null): WithdrawEventFilter;
        Withdraw(account?: string | null, value?: null): WithdrawEventFilter;
    };
    estimateGas: {
        advance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowanceCoupons(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveCoupons(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBonded(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfCoupons(account: string, epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfStaged(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        bond(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bootstrappingAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculatePrice(overrides?: CallOverrides): Promise<BigNumber>;
        calculateReward(overrides?: CallOverrides): Promise<BigNumber>;
        commit(candidate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        couponPremium(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        couponsExpiration(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        dollar(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyCommit(candidate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochTime(overrides?: CallOverrides): Promise<BigNumber>;
        expiringCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        expiringCouponsAtIndex(epoch: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        fluidUntil(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isInitialized(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        isNominated(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockedUntil(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        outstandingCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        periodFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        purchaseCoupons(dollarAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        recordedVote(account: string, candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        redeemCoupons(couponEpoch: BigNumberish, couponAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rejectFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        startFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        statusOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalBonded(overrides?: CallOverrides): Promise<BigNumber>;
        totalBondedAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalCoupons(overrides?: CallOverrides): Promise<BigNumber>;
        totalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        totalNet(overrides?: CallOverrides): Promise<BigNumber>;
        totalRedeemable(overrides?: CallOverrides): Promise<BigNumber>;
        totalStaged(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferCoupons(sender: string, recipient: string, epoch: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unbond(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unbondUnderlying(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        vote(candidate: string, vote: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        votesFor(candidate: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        advance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowanceCoupons(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveCoupons(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveFor(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBonded(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfCoupons(account: string, epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfStaged(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bond(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bootstrappingAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculatePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commit(candidate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        couponPremium(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        couponsExpiration(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        dollar(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyCommit(candidate: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        expiringCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        expiringCouponsAtIndex(epoch: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fluidUntil(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isInitialized(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isNominated(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedUntil(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        outstandingCoupons(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodFor(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        purchaseCoupons(dollarAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        recordedVote(account: string, candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemCoupons(couponEpoch: BigNumberish, couponAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rejectFor(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startFor(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        statusOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBonded(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBondedAt(epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalCoupons(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalNet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalRedeemable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalStaged(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferCoupons(sender: string, recipient: string, epoch: BigNumberish, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unbond(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unbondUnderlying(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        vote(candidate: string, vote: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        votesFor(candidate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
