import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface ProxyCustomImplementationInterface extends utils.Interface {
    functions: {
        "_become(address)": FunctionFragment;
        "_borrowGuardianPaused()": FunctionFragment;
        "_grantComp(address,uint256)": FunctionFragment;
        "_mintGuardianPaused()": FunctionFragment;
        "_setBorrowCapGuardian(address)": FunctionFragment;
        "_setBorrowPaused(address,bool)": FunctionFragment;
        "_setCloseFactor(uint256)": FunctionFragment;
        "_setCollateralFactor(address,uint256)": FunctionFragment;
        "_setCompSpeeds(address[],uint256[],uint256[])": FunctionFragment;
        "_setContributorCompSpeed(address,uint256)": FunctionFragment;
        "_setLiquidationIncentive(uint256)": FunctionFragment;
        "_setMarketBorrowCaps(address[],uint256[])": FunctionFragment;
        "_setMintPaused(address,bool)": FunctionFragment;
        "_setPauseGuardian(address)": FunctionFragment;
        "_setPriceOracle(address)": FunctionFragment;
        "_setSeizePaused(bool)": FunctionFragment;
        "_setTransferPaused(bool)": FunctionFragment;
        "_supportMarket(address)": FunctionFragment;
        "accountAssets(address,uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "allMarkets(uint256)": FunctionFragment;
        "borrowAllowed(address,address,uint256)": FunctionFragment;
        "borrowCapGuardian()": FunctionFragment;
        "borrowCaps(address)": FunctionFragment;
        "borrowGuardianPaused(address)": FunctionFragment;
        "borrowVerify(address,address,uint256)": FunctionFragment;
        "checkMembership(address,address)": FunctionFragment;
        "claimComp(address,address[])": FunctionFragment;
        "claimComp(address[],address[],bool,bool)": FunctionFragment;
        "claimComp(address)": FunctionFragment;
        "closeFactorMantissa()": FunctionFragment;
        "compAccrued(address)": FunctionFragment;
        "compBorrowSpeeds(address)": FunctionFragment;
        "compBorrowState(address)": FunctionFragment;
        "compBorrowerIndex(address,address)": FunctionFragment;
        "compContributorSpeeds(address)": FunctionFragment;
        "compInitialIndex()": FunctionFragment;
        "compRate()": FunctionFragment;
        "compReceivable(address)": FunctionFragment;
        "compSpeeds(address)": FunctionFragment;
        "compSupplierIndex(address,address)": FunctionFragment;
        "compSupplySpeeds(address)": FunctionFragment;
        "compSupplyState(address)": FunctionFragment;
        "comptrollerImplementation()": FunctionFragment;
        "enterMarkets(address[])": FunctionFragment;
        "exitMarket(address)": FunctionFragment;
        "fixBadAccruals(address[],uint256[])": FunctionFragment;
        "getAccountLiquidity(address)": FunctionFragment;
        "getAllMarkets()": FunctionFragment;
        "getAssetsIn(address)": FunctionFragment;
        "getBlockNumber()": FunctionFragment;
        "getCompAddress()": FunctionFragment;
        "getHypotheticalAccountLiquidity(address,address,uint256,uint256)": FunctionFragment;
        "isComptroller()": FunctionFragment;
        "isDeprecated(address)": FunctionFragment;
        "lastContributorBlock(address)": FunctionFragment;
        "liquidateBorrowAllowed(address,address,address,address,uint256)": FunctionFragment;
        "liquidateBorrowVerify(address,address,address,address,uint256,uint256)": FunctionFragment;
        "liquidateCalculateSeizeTokens(address,address,uint256)": FunctionFragment;
        "liquidationIncentiveMantissa()": FunctionFragment;
        "markets(address)": FunctionFragment;
        "maxAssets()": FunctionFragment;
        "mintAllowed(address,address,uint256)": FunctionFragment;
        "mintGuardianPaused(address)": FunctionFragment;
        "mintVerify(address,address,uint256,uint256)": FunctionFragment;
        "oracle()": FunctionFragment;
        "pauseGuardian()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "pendingComptrollerImplementation()": FunctionFragment;
        "proposal65FixExecuted()": FunctionFragment;
        "redeemAllowed(address,address,uint256)": FunctionFragment;
        "redeemVerify(address,address,uint256,uint256)": FunctionFragment;
        "repayBorrowAllowed(address,address,address,uint256)": FunctionFragment;
        "repayBorrowVerify(address,address,address,uint256,uint256)": FunctionFragment;
        "seizeAllowed(address,address,address,address,uint256)": FunctionFragment;
        "seizeGuardianPaused()": FunctionFragment;
        "seizeVerify(address,address,address,address,uint256)": FunctionFragment;
        "transferAllowed(address,address,address,uint256)": FunctionFragment;
        "transferGuardianPaused()": FunctionFragment;
        "transferVerify(address,address,address,uint256)": FunctionFragment;
        "updateContributorRewards(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_become" | "_borrowGuardianPaused" | "_grantComp" | "_mintGuardianPaused" | "_setBorrowCapGuardian" | "_setBorrowPaused" | "_setCloseFactor" | "_setCollateralFactor" | "_setCompSpeeds" | "_setContributorCompSpeed" | "_setLiquidationIncentive" | "_setMarketBorrowCaps" | "_setMintPaused" | "_setPauseGuardian" | "_setPriceOracle" | "_setSeizePaused" | "_setTransferPaused" | "_supportMarket" | "accountAssets" | "admin" | "allMarkets" | "borrowAllowed" | "borrowCapGuardian" | "borrowCaps" | "borrowGuardianPaused" | "borrowVerify" | "checkMembership" | "claimComp(address,address[])" | "claimComp(address[],address[],bool,bool)" | "claimComp(address)" | "closeFactorMantissa" | "compAccrued" | "compBorrowSpeeds" | "compBorrowState" | "compBorrowerIndex" | "compContributorSpeeds" | "compInitialIndex" | "compRate" | "compReceivable" | "compSpeeds" | "compSupplierIndex" | "compSupplySpeeds" | "compSupplyState" | "comptrollerImplementation" | "enterMarkets" | "exitMarket" | "fixBadAccruals" | "getAccountLiquidity" | "getAllMarkets" | "getAssetsIn" | "getBlockNumber" | "getCompAddress" | "getHypotheticalAccountLiquidity" | "isComptroller" | "isDeprecated" | "lastContributorBlock" | "liquidateBorrowAllowed" | "liquidateBorrowVerify" | "liquidateCalculateSeizeTokens" | "liquidationIncentiveMantissa" | "markets" | "maxAssets" | "mintAllowed" | "mintGuardianPaused" | "mintVerify" | "oracle" | "pauseGuardian" | "pendingAdmin" | "pendingComptrollerImplementation" | "proposal65FixExecuted" | "redeemAllowed" | "redeemVerify" | "repayBorrowAllowed" | "repayBorrowVerify" | "seizeAllowed" | "seizeGuardianPaused" | "seizeVerify" | "transferAllowed" | "transferGuardianPaused" | "transferVerify" | "updateContributorRewards"): FunctionFragment;
    encodeFunctionData(functionFragment: "_become", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "_borrowGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "_grantComp", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_mintGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setBorrowCapGuardian", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "_setBorrowPaused", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_setCompSpeeds", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "_setContributorCompSpeed", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "_setMarketBorrowCaps", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "_setMintPaused", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "_setPauseGuardian", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "_setSeizePaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "_setTransferPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "_supportMarket", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "accountAssets", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allMarkets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "borrowCapGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowCaps", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "borrowGuardianPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "borrowVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "claimComp(address,address[])", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "claimComp(address[],address[],bool,bool)", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>[],
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "claimComp(address)", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compBorrowSpeeds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compBorrowState", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compBorrowerIndex", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compContributorSpeeds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compInitialIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "compRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "compReceivable", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compSpeeds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compSupplierIndex", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compSupplySpeeds", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "compSupplyState", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fixBadAccruals", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCompAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHypotheticalAccountLiquidity", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "isComptroller", values?: undefined): string;
    encodeFunctionData(functionFragment: "isDeprecated", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "lastContributorBlock", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "maxAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "mintGuardianPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingComptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposal65FixExecuted", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "repayBorrowVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "seizeGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "seizeVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferGuardianPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferVerify", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updateContributorRewards", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_grantComp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCloseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCollateralFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCompSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setContributorCompSpeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMarketBorrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMintPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setSeizePaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setTransferPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_supportMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCapGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp(address,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp(address[],address[],bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimComp(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compBorrowerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compContributorSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compInitialIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compReceivable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplierIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplySpeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compSupplyState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fixBadAccruals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCompAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHypotheticalAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isComptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDeprecated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastContributorBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateCalculateSeizeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentiveMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingComptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposal65FixExecuted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateContributorRewards", data: BytesLike): Result;
    events: {
        "ActionPaused(string,bool)": EventFragment;
        "ActionPaused(address,string,bool)": EventFragment;
        "CompAccruedAdjusted(address,uint256,uint256)": EventFragment;
        "CompBorrowSpeedUpdated(address,uint256)": EventFragment;
        "CompGranted(address,uint256)": EventFragment;
        "CompReceivableUpdated(address,uint256,uint256)": EventFragment;
        "CompSupplySpeedUpdated(address,uint256)": EventFragment;
        "ContributorCompSpeedUpdated(address,uint256)": EventFragment;
        "DistributedBorrowerComp(address,address,uint256,uint256)": EventFragment;
        "DistributedSupplierComp(address,address,uint256,uint256)": EventFragment;
        "Failure(uint256,uint256,uint256)": EventFragment;
        "MarketEntered(address,address)": EventFragment;
        "MarketExited(address,address)": EventFragment;
        "MarketListed(address)": EventFragment;
        "NewBorrowCap(address,uint256)": EventFragment;
        "NewBorrowCapGuardian(address,address)": EventFragment;
        "NewCloseFactor(uint256,uint256)": EventFragment;
        "NewCollateralFactor(address,uint256,uint256)": EventFragment;
        "NewLiquidationIncentive(uint256,uint256)": EventFragment;
        "NewPauseGuardian(address,address)": EventFragment;
        "NewPriceOracle(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ActionPaused(string,bool)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ActionPaused(address,string,bool)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompAccruedAdjusted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompBorrowSpeedUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompReceivableUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CompSupplySpeedUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContributorCompSpeedUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DistributedBorrowerComp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DistributedSupplierComp"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketEntered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketExited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketListed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewBorrowCap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewBorrowCapGuardian"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCloseFactor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewCollateralFactor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewLiquidationIncentive"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPauseGuardian"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewPriceOracle"): EventFragment;
}
export interface ActionPaused_string_bool_EventObject {
    action: string;
    pauseState: boolean;
}
export declare type ActionPaused_string_bool_Event = TypedEvent<[
    string,
    boolean
], ActionPaused_string_bool_EventObject>;
export declare type ActionPaused_string_bool_EventFilter = TypedEventFilter<ActionPaused_string_bool_Event>;
export interface ActionPaused_address_string_bool_EventObject {
    cToken: string;
    action: string;
    pauseState: boolean;
}
export declare type ActionPaused_address_string_bool_Event = TypedEvent<[
    string,
    string,
    boolean
], ActionPaused_address_string_bool_EventObject>;
export declare type ActionPaused_address_string_bool_EventFilter = TypedEventFilter<ActionPaused_address_string_bool_Event>;
export interface CompAccruedAdjustedEventObject {
    user: string;
    oldCompAccrued: BigNumber;
    newCompAccrued: BigNumber;
}
export declare type CompAccruedAdjustedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CompAccruedAdjustedEventObject>;
export declare type CompAccruedAdjustedEventFilter = TypedEventFilter<CompAccruedAdjustedEvent>;
export interface CompBorrowSpeedUpdatedEventObject {
    cToken: string;
    newSpeed: BigNumber;
}
export declare type CompBorrowSpeedUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], CompBorrowSpeedUpdatedEventObject>;
export declare type CompBorrowSpeedUpdatedEventFilter = TypedEventFilter<CompBorrowSpeedUpdatedEvent>;
export interface CompGrantedEventObject {
    recipient: string;
    amount: BigNumber;
}
export declare type CompGrantedEvent = TypedEvent<[
    string,
    BigNumber
], CompGrantedEventObject>;
export declare type CompGrantedEventFilter = TypedEventFilter<CompGrantedEvent>;
export interface CompReceivableUpdatedEventObject {
    user: string;
    oldCompReceivable: BigNumber;
    newCompReceivable: BigNumber;
}
export declare type CompReceivableUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CompReceivableUpdatedEventObject>;
export declare type CompReceivableUpdatedEventFilter = TypedEventFilter<CompReceivableUpdatedEvent>;
export interface CompSupplySpeedUpdatedEventObject {
    cToken: string;
    newSpeed: BigNumber;
}
export declare type CompSupplySpeedUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], CompSupplySpeedUpdatedEventObject>;
export declare type CompSupplySpeedUpdatedEventFilter = TypedEventFilter<CompSupplySpeedUpdatedEvent>;
export interface ContributorCompSpeedUpdatedEventObject {
    contributor: string;
    newSpeed: BigNumber;
}
export declare type ContributorCompSpeedUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], ContributorCompSpeedUpdatedEventObject>;
export declare type ContributorCompSpeedUpdatedEventFilter = TypedEventFilter<ContributorCompSpeedUpdatedEvent>;
export interface DistributedBorrowerCompEventObject {
    cToken: string;
    borrower: string;
    compDelta: BigNumber;
    compBorrowIndex: BigNumber;
}
export declare type DistributedBorrowerCompEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DistributedBorrowerCompEventObject>;
export declare type DistributedBorrowerCompEventFilter = TypedEventFilter<DistributedBorrowerCompEvent>;
export interface DistributedSupplierCompEventObject {
    cToken: string;
    supplier: string;
    compDelta: BigNumber;
    compSupplyIndex: BigNumber;
}
export declare type DistributedSupplierCompEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DistributedSupplierCompEventObject>;
export declare type DistributedSupplierCompEventFilter = TypedEventFilter<DistributedSupplierCompEvent>;
export interface FailureEventObject {
    error: BigNumber;
    info: BigNumber;
    detail: BigNumber;
}
export declare type FailureEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], FailureEventObject>;
export declare type FailureEventFilter = TypedEventFilter<FailureEvent>;
export interface MarketEnteredEventObject {
    cToken: string;
    account: string;
}
export declare type MarketEnteredEvent = TypedEvent<[
    string,
    string
], MarketEnteredEventObject>;
export declare type MarketEnteredEventFilter = TypedEventFilter<MarketEnteredEvent>;
export interface MarketExitedEventObject {
    cToken: string;
    account: string;
}
export declare type MarketExitedEvent = TypedEvent<[
    string,
    string
], MarketExitedEventObject>;
export declare type MarketExitedEventFilter = TypedEventFilter<MarketExitedEvent>;
export interface MarketListedEventObject {
    cToken: string;
}
export declare type MarketListedEvent = TypedEvent<[string], MarketListedEventObject>;
export declare type MarketListedEventFilter = TypedEventFilter<MarketListedEvent>;
export interface NewBorrowCapEventObject {
    cToken: string;
    newBorrowCap: BigNumber;
}
export declare type NewBorrowCapEvent = TypedEvent<[
    string,
    BigNumber
], NewBorrowCapEventObject>;
export declare type NewBorrowCapEventFilter = TypedEventFilter<NewBorrowCapEvent>;
export interface NewBorrowCapGuardianEventObject {
    oldBorrowCapGuardian: string;
    newBorrowCapGuardian: string;
}
export declare type NewBorrowCapGuardianEvent = TypedEvent<[
    string,
    string
], NewBorrowCapGuardianEventObject>;
export declare type NewBorrowCapGuardianEventFilter = TypedEventFilter<NewBorrowCapGuardianEvent>;
export interface NewCloseFactorEventObject {
    oldCloseFactorMantissa: BigNumber;
    newCloseFactorMantissa: BigNumber;
}
export declare type NewCloseFactorEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewCloseFactorEventObject>;
export declare type NewCloseFactorEventFilter = TypedEventFilter<NewCloseFactorEvent>;
export interface NewCollateralFactorEventObject {
    cToken: string;
    oldCollateralFactorMantissa: BigNumber;
    newCollateralFactorMantissa: BigNumber;
}
export declare type NewCollateralFactorEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], NewCollateralFactorEventObject>;
export declare type NewCollateralFactorEventFilter = TypedEventFilter<NewCollateralFactorEvent>;
export interface NewLiquidationIncentiveEventObject {
    oldLiquidationIncentiveMantissa: BigNumber;
    newLiquidationIncentiveMantissa: BigNumber;
}
export declare type NewLiquidationIncentiveEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewLiquidationIncentiveEventObject>;
export declare type NewLiquidationIncentiveEventFilter = TypedEventFilter<NewLiquidationIncentiveEvent>;
export interface NewPauseGuardianEventObject {
    oldPauseGuardian: string;
    newPauseGuardian: string;
}
export declare type NewPauseGuardianEvent = TypedEvent<[
    string,
    string
], NewPauseGuardianEventObject>;
export declare type NewPauseGuardianEventFilter = TypedEventFilter<NewPauseGuardianEvent>;
export interface NewPriceOracleEventObject {
    oldPriceOracle: string;
    newPriceOracle: string;
}
export declare type NewPriceOracleEvent = TypedEvent<[
    string,
    string
], NewPriceOracleEventObject>;
export declare type NewPriceOracleEventFilter = TypedEventFilter<NewPriceOracleEvent>;
export interface ProxyCustomImplementation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyCustomImplementationInterface;
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
        _become(unitroller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        _grantComp(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        _setBorrowCapGuardian(newBorrowCapGuardian: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setBorrowPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setCloseFactor(newCloseFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setCollateralFactor(cToken: PromiseOrValue<string>, newCollateralFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setCompSpeeds(cTokens: PromiseOrValue<string>[], supplySpeeds: PromiseOrValue<BigNumberish>[], borrowSpeeds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setContributorCompSpeed(contributor: PromiseOrValue<string>, compSpeed: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setMarketBorrowCaps(cTokens: PromiseOrValue<string>[], newBorrowCaps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setMintPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setPauseGuardian(newPauseGuardian: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setPriceOracle(newOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setSeizePaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _setTransferPaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        _supportMarket(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        accountAssets(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        allMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        borrowAllowed(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        borrowCapGuardian(overrides?: CallOverrides): Promise<[string]>;
        borrowCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        borrowVerify(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkMembership(account: PromiseOrValue<string>, cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        "claimComp(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "claimComp(address[],address[],bool,bool)"(holders: PromiseOrValue<string>[], cTokens: PromiseOrValue<string>[], borrowers: PromiseOrValue<boolean>, suppliers: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "claimComp(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compBorrowSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compBorrowState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
            index: BigNumber;
            block: number;
        }>;
        compBorrowerIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compContributorSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compInitialIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        compRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        compReceivable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compSupplierIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compSupplySpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        compSupplyState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
            index: BigNumber;
            block: number;
        }>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        enterMarkets(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exitMarket(cTokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fixBadAccruals(affectedUsers: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAccountLiquidity(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAllMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        getAssetsIn(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCompAddress(overrides?: CallOverrides): Promise<[string]>;
        getHypotheticalAccountLiquidity(account: PromiseOrValue<string>, cTokenModify: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        isComptroller(overrides?: CallOverrides): Promise<[boolean]>;
        isDeprecated(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        lastContributorBlock(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidateBorrowAllowed(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidateBorrowVerify(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        markets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            boolean
        ] & {
            isListed: boolean;
            collateralFactorMantissa: BigNumber;
            isComped: boolean;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        mintAllowed(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mintVerify(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, actualMintAmount: PromiseOrValue<BigNumberish>, mintTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        pauseGuardian(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        proposal65FixExecuted(overrides?: CallOverrides): Promise<[boolean]>;
        redeemAllowed(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemVerify(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemAmount: PromiseOrValue<BigNumberish>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repayBorrowAllowed(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repayBorrowVerify(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, borrowerIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        seizeAllowed(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        seizeVerify(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferAllowed(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
        transferVerify(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateContributorRewards(contributor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _become(unitroller: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    _grantComp(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    _setBorrowCapGuardian(newBorrowCapGuardian: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setBorrowPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setCloseFactor(newCloseFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setCollateralFactor(cToken: PromiseOrValue<string>, newCollateralFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setCompSpeeds(cTokens: PromiseOrValue<string>[], supplySpeeds: PromiseOrValue<BigNumberish>[], borrowSpeeds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setContributorCompSpeed(contributor: PromiseOrValue<string>, compSpeed: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setLiquidationIncentive(newLiquidationIncentiveMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setMarketBorrowCaps(cTokens: PromiseOrValue<string>[], newBorrowCaps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setMintPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setPauseGuardian(newPauseGuardian: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setPriceOracle(newOracle: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setSeizePaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _setTransferPaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    _supportMarket(cToken: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    accountAssets(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    admin(overrides?: CallOverrides): Promise<string>;
    allMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    borrowAllowed(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    borrowCapGuardian(overrides?: CallOverrides): Promise<string>;
    borrowCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    borrowGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    borrowVerify(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkMembership(account: PromiseOrValue<string>, cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    "claimComp(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "claimComp(address[],address[],bool,bool)"(holders: PromiseOrValue<string>[], cTokens: PromiseOrValue<string>[], borrowers: PromiseOrValue<boolean>, suppliers: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "claimComp(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compBorrowSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compBorrowState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
        index: BigNumber;
        block: number;
    }>;
    compBorrowerIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compContributorSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compInitialIndex(overrides?: CallOverrides): Promise<BigNumber>;
    compRate(overrides?: CallOverrides): Promise<BigNumber>;
    compReceivable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compSupplierIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compSupplySpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    compSupplyState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
        index: BigNumber;
        block: number;
    }>;
    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    enterMarkets(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exitMarket(cTokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fixBadAccruals(affectedUsers: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAccountLiquidity(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
    getAssetsIn(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    getCompAddress(overrides?: CallOverrides): Promise<string>;
    getHypotheticalAccountLiquidity(account: PromiseOrValue<string>, cTokenModify: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    isComptroller(overrides?: CallOverrides): Promise<boolean>;
    isDeprecated(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    lastContributorBlock(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    liquidateBorrowAllowed(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidateBorrowVerify(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidateCalculateSeizeTokens(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    markets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber,
        boolean
    ] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        isComped: boolean;
    }>;
    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
    mintAllowed(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mintVerify(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, actualMintAmount: PromiseOrValue<BigNumberish>, mintTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    oracle(overrides?: CallOverrides): Promise<string>;
    pauseGuardian(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    proposal65FixExecuted(overrides?: CallOverrides): Promise<boolean>;
    redeemAllowed(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemVerify(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemAmount: PromiseOrValue<BigNumberish>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repayBorrowAllowed(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repayBorrowVerify(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, borrowerIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    seizeAllowed(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    seizeVerify(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferAllowed(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
    transferVerify(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateContributorRewards(contributor: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _become(unitroller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        _grantComp(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        _setBorrowCapGuardian(newBorrowCapGuardian: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        _setBorrowPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        _setCloseFactor(newCloseFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        _setCollateralFactor(cToken: PromiseOrValue<string>, newCollateralFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        _setCompSpeeds(cTokens: PromiseOrValue<string>[], supplySpeeds: PromiseOrValue<BigNumberish>[], borrowSpeeds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        _setContributorCompSpeed(contributor: PromiseOrValue<string>, compSpeed: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        _setMarketBorrowCaps(cTokens: PromiseOrValue<string>[], newBorrowCaps: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        _setMintPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        _setPauseGuardian(newPauseGuardian: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        _setPriceOracle(newOracle: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        _setSeizePaused(state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        _setTransferPaused(state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        _supportMarket(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accountAssets(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        admin(overrides?: CallOverrides): Promise<string>;
        allMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        borrowAllowed(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowCapGuardian(overrides?: CallOverrides): Promise<string>;
        borrowCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        borrowVerify(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        checkMembership(account: PromiseOrValue<string>, cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        "claimComp(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        "claimComp(address[],address[],bool,bool)"(holders: PromiseOrValue<string>[], cTokens: PromiseOrValue<string>[], borrowers: PromiseOrValue<boolean>, suppliers: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        "claimComp(address)"(holder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
            index: BigNumber;
            block: number;
        }>;
        compBorrowerIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compContributorSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compInitialIndex(overrides?: CallOverrides): Promise<BigNumber>;
        compRate(overrides?: CallOverrides): Promise<BigNumber>;
        compReceivable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplierIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplySpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplyState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, number] & {
            index: BigNumber;
            block: number;
        }>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        enterMarkets(cTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        exitMarket(cTokenAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        fixBadAccruals(affectedUsers: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        getAccountLiquidity(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
        getAssetsIn(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getCompAddress(overrides?: CallOverrides): Promise<string>;
        getHypotheticalAccountLiquidity(account: PromiseOrValue<string>, cTokenModify: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        isComptroller(overrides?: CallOverrides): Promise<boolean>;
        isDeprecated(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        lastContributorBlock(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowAllowed(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowVerify(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            boolean
        ] & {
            isListed: boolean;
            collateralFactorMantissa: BigNumber;
            isComped: boolean;
        }>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mintAllowed(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        mintGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mintVerify(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, actualMintAmount: PromiseOrValue<BigNumberish>, mintTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        oracle(overrides?: CallOverrides): Promise<string>;
        pauseGuardian(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        proposal65FixExecuted(overrides?: CallOverrides): Promise<boolean>;
        redeemAllowed(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemVerify(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemAmount: PromiseOrValue<BigNumberish>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        repayBorrowAllowed(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowVerify(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, borrowerIndex: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        seizeAllowed(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        seizeVerify(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferAllowed(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
        transferVerify(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateContributorRewards(contributor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ActionPaused(string,bool)"(action?: null, pauseState?: null): ActionPaused_string_bool_EventFilter;
        "ActionPaused(address,string,bool)"(cToken?: null, action?: null, pauseState?: null): ActionPaused_address_string_bool_EventFilter;
        "CompAccruedAdjusted(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, oldCompAccrued?: null, newCompAccrued?: null): CompAccruedAdjustedEventFilter;
        CompAccruedAdjusted(user?: PromiseOrValue<string> | null, oldCompAccrued?: null, newCompAccrued?: null): CompAccruedAdjustedEventFilter;
        "CompBorrowSpeedUpdated(address,uint256)"(cToken?: PromiseOrValue<string> | null, newSpeed?: null): CompBorrowSpeedUpdatedEventFilter;
        CompBorrowSpeedUpdated(cToken?: PromiseOrValue<string> | null, newSpeed?: null): CompBorrowSpeedUpdatedEventFilter;
        "CompGranted(address,uint256)"(recipient?: null, amount?: null): CompGrantedEventFilter;
        CompGranted(recipient?: null, amount?: null): CompGrantedEventFilter;
        "CompReceivableUpdated(address,uint256,uint256)"(user?: PromiseOrValue<string> | null, oldCompReceivable?: null, newCompReceivable?: null): CompReceivableUpdatedEventFilter;
        CompReceivableUpdated(user?: PromiseOrValue<string> | null, oldCompReceivable?: null, newCompReceivable?: null): CompReceivableUpdatedEventFilter;
        "CompSupplySpeedUpdated(address,uint256)"(cToken?: PromiseOrValue<string> | null, newSpeed?: null): CompSupplySpeedUpdatedEventFilter;
        CompSupplySpeedUpdated(cToken?: PromiseOrValue<string> | null, newSpeed?: null): CompSupplySpeedUpdatedEventFilter;
        "ContributorCompSpeedUpdated(address,uint256)"(contributor?: PromiseOrValue<string> | null, newSpeed?: null): ContributorCompSpeedUpdatedEventFilter;
        ContributorCompSpeedUpdated(contributor?: PromiseOrValue<string> | null, newSpeed?: null): ContributorCompSpeedUpdatedEventFilter;
        "DistributedBorrowerComp(address,address,uint256,uint256)"(cToken?: PromiseOrValue<string> | null, borrower?: PromiseOrValue<string> | null, compDelta?: null, compBorrowIndex?: null): DistributedBorrowerCompEventFilter;
        DistributedBorrowerComp(cToken?: PromiseOrValue<string> | null, borrower?: PromiseOrValue<string> | null, compDelta?: null, compBorrowIndex?: null): DistributedBorrowerCompEventFilter;
        "DistributedSupplierComp(address,address,uint256,uint256)"(cToken?: PromiseOrValue<string> | null, supplier?: PromiseOrValue<string> | null, compDelta?: null, compSupplyIndex?: null): DistributedSupplierCompEventFilter;
        DistributedSupplierComp(cToken?: PromiseOrValue<string> | null, supplier?: PromiseOrValue<string> | null, compDelta?: null, compSupplyIndex?: null): DistributedSupplierCompEventFilter;
        "Failure(uint256,uint256,uint256)"(error?: null, info?: null, detail?: null): FailureEventFilter;
        Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
        "MarketEntered(address,address)"(cToken?: null, account?: null): MarketEnteredEventFilter;
        MarketEntered(cToken?: null, account?: null): MarketEnteredEventFilter;
        "MarketExited(address,address)"(cToken?: null, account?: null): MarketExitedEventFilter;
        MarketExited(cToken?: null, account?: null): MarketExitedEventFilter;
        "MarketListed(address)"(cToken?: null): MarketListedEventFilter;
        MarketListed(cToken?: null): MarketListedEventFilter;
        "NewBorrowCap(address,uint256)"(cToken?: PromiseOrValue<string> | null, newBorrowCap?: null): NewBorrowCapEventFilter;
        NewBorrowCap(cToken?: PromiseOrValue<string> | null, newBorrowCap?: null): NewBorrowCapEventFilter;
        "NewBorrowCapGuardian(address,address)"(oldBorrowCapGuardian?: null, newBorrowCapGuardian?: null): NewBorrowCapGuardianEventFilter;
        NewBorrowCapGuardian(oldBorrowCapGuardian?: null, newBorrowCapGuardian?: null): NewBorrowCapGuardianEventFilter;
        "NewCloseFactor(uint256,uint256)"(oldCloseFactorMantissa?: null, newCloseFactorMantissa?: null): NewCloseFactorEventFilter;
        NewCloseFactor(oldCloseFactorMantissa?: null, newCloseFactorMantissa?: null): NewCloseFactorEventFilter;
        "NewCollateralFactor(address,uint256,uint256)"(cToken?: null, oldCollateralFactorMantissa?: null, newCollateralFactorMantissa?: null): NewCollateralFactorEventFilter;
        NewCollateralFactor(cToken?: null, oldCollateralFactorMantissa?: null, newCollateralFactorMantissa?: null): NewCollateralFactorEventFilter;
        "NewLiquidationIncentive(uint256,uint256)"(oldLiquidationIncentiveMantissa?: null, newLiquidationIncentiveMantissa?: null): NewLiquidationIncentiveEventFilter;
        NewLiquidationIncentive(oldLiquidationIncentiveMantissa?: null, newLiquidationIncentiveMantissa?: null): NewLiquidationIncentiveEventFilter;
        "NewPauseGuardian(address,address)"(oldPauseGuardian?: null, newPauseGuardian?: null): NewPauseGuardianEventFilter;
        NewPauseGuardian(oldPauseGuardian?: null, newPauseGuardian?: null): NewPauseGuardianEventFilter;
        "NewPriceOracle(address,address)"(oldPriceOracle?: null, newPriceOracle?: null): NewPriceOracleEventFilter;
        NewPriceOracle(oldPriceOracle?: null, newPriceOracle?: null): NewPriceOracleEventFilter;
    };
    estimateGas: {
        _become(unitroller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        _grantComp(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        _setBorrowCapGuardian(newBorrowCapGuardian: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setBorrowPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setCloseFactor(newCloseFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setCollateralFactor(cToken: PromiseOrValue<string>, newCollateralFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setCompSpeeds(cTokens: PromiseOrValue<string>[], supplySpeeds: PromiseOrValue<BigNumberish>[], borrowSpeeds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setContributorCompSpeed(contributor: PromiseOrValue<string>, compSpeed: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setMarketBorrowCaps(cTokens: PromiseOrValue<string>[], newBorrowCaps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setMintPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setPauseGuardian(newPauseGuardian: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setPriceOracle(newOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setSeizePaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _setTransferPaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        _supportMarket(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        accountAssets(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        allMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAllowed(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        borrowCapGuardian(overrides?: CallOverrides): Promise<BigNumber>;
        borrowCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        borrowVerify(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkMembership(account: PromiseOrValue<string>, cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        "claimComp(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "claimComp(address[],address[],bool,bool)"(holders: PromiseOrValue<string>[], cTokens: PromiseOrValue<string>[], borrowers: PromiseOrValue<boolean>, suppliers: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "claimComp(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compBorrowerIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compContributorSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compInitialIndex(overrides?: CallOverrides): Promise<BigNumber>;
        compRate(overrides?: CallOverrides): Promise<BigNumber>;
        compReceivable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplierIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplySpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        compSupplyState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exitMarket(cTokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fixBadAccruals(affectedUsers: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAccountLiquidity(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAllMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsIn(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getCompAddress(overrides?: CallOverrides): Promise<BigNumber>;
        getHypotheticalAccountLiquidity(account: PromiseOrValue<string>, cTokenModify: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isComptroller(overrides?: CallOverrides): Promise<BigNumber>;
        isDeprecated(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        lastContributorBlock(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowAllowed(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidateBorrowVerify(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        maxAssets(overrides?: CallOverrides): Promise<BigNumber>;
        mintAllowed(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mintVerify(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, actualMintAmount: PromiseOrValue<BigNumberish>, mintTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        proposal65FixExecuted(overrides?: CallOverrides): Promise<BigNumber>;
        redeemAllowed(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemVerify(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemAmount: PromiseOrValue<BigNumberish>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repayBorrowAllowed(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repayBorrowVerify(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, borrowerIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        seizeAllowed(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        seizeVerify(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferAllowed(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
        transferVerify(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateContributorRewards(contributor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _become(unitroller: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _borrowGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _grantComp(recipient: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _mintGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setBorrowCapGuardian(newBorrowCapGuardian: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setBorrowPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setCloseFactor(newCloseFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setCollateralFactor(cToken: PromiseOrValue<string>, newCollateralFactorMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setCompSpeeds(cTokens: PromiseOrValue<string>[], supplySpeeds: PromiseOrValue<BigNumberish>[], borrowSpeeds: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setContributorCompSpeed(contributor: PromiseOrValue<string>, compSpeed: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setMarketBorrowCaps(cTokens: PromiseOrValue<string>[], newBorrowCaps: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setMintPaused(cToken: PromiseOrValue<string>, state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setPauseGuardian(newPauseGuardian: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setPriceOracle(newOracle: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setSeizePaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _setTransferPaused(state: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        _supportMarket(cToken: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        accountAssets(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAllowed(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        borrowCapGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowCaps(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowVerify(cToken: PromiseOrValue<string>, borrower: PromiseOrValue<string>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkMembership(account: PromiseOrValue<string>, cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "claimComp(address,address[])"(holder: PromiseOrValue<string>, cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "claimComp(address[],address[],bool,bool)"(holders: PromiseOrValue<string>[], cTokens: PromiseOrValue<string>[], borrowers: PromiseOrValue<boolean>, suppliers: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "claimComp(address)"(holder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compAccrued(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compBorrowSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compBorrowState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compBorrowerIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compContributorSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compInitialIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compReceivable(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSupplierIndex(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSupplySpeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        compSupplyState(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterMarkets(cTokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exitMarket(cTokenAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fixBadAccruals(affectedUsers: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAccountLiquidity(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsIn(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCompAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHypotheticalAccountLiquidity(account: PromiseOrValue<string>, cTokenModify: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, borrowAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isComptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDeprecated(cToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastContributorBlock(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrowAllowed(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidateBorrowVerify(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: PromiseOrValue<string>, cTokenCollateral: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markets(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintAllowed(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, mintAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintGuardianPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintVerify(cToken: PromiseOrValue<string>, minter: PromiseOrValue<string>, actualMintAmount: PromiseOrValue<BigNumberish>, mintTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingComptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposal65FixExecuted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemAllowed(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemVerify(cToken: PromiseOrValue<string>, redeemer: PromiseOrValue<string>, redeemAmount: PromiseOrValue<BigNumberish>, redeemTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repayBorrowAllowed(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, repayAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repayBorrowVerify(cToken: PromiseOrValue<string>, payer: PromiseOrValue<string>, borrower: PromiseOrValue<string>, actualRepayAmount: PromiseOrValue<BigNumberish>, borrowerIndex: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        seizeAllowed(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        seizeGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seizeVerify(cTokenCollateral: PromiseOrValue<string>, cTokenBorrowed: PromiseOrValue<string>, liquidator: PromiseOrValue<string>, borrower: PromiseOrValue<string>, seizeTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferAllowed(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferGuardianPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferVerify(cToken: PromiseOrValue<string>, src: PromiseOrValue<string>, dst: PromiseOrValue<string>, transferTokens: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateContributorRewards(contributor: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
