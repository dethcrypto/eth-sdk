import { Contract } from 'ethers';
import mainnetTokensDaiAbi from '../../eth-sdk/abis/mainnet/tokens/dai.json';
import mainnetTokensMkrAbi from '../../eth-sdk/abis/mainnet/tokens/mkr.json';
import mainnetUniswapAbi from '../../eth-sdk/abis/mainnet/uniswap.json';
import mainnetProxiesProxyStandardStorageSlotAbi from '../../eth-sdk/abis/mainnet/proxies/proxyStandardStorageSlot.json';
import mainnetProxiesProxyCustomImplementationAbi from '../../eth-sdk/abis/mainnet/proxies/proxyCustomImplementation.json';
export function getContract(address, abi, defaultSigner) {
    return new Contract(address, abi, defaultSigner);
}
export function getMainnetSdk(defaultSigner) {
    return {
        "tokens": {
            "dai": getContract('0x6B175474E89094C44Da98b954EedeAC495271d0F', mainnetTokensDaiAbi, defaultSigner),
            "mkr": getContract('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', mainnetTokensMkrAbi, defaultSigner),
        },
        "uniswap": getContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', mainnetUniswapAbi, defaultSigner),
        "proxies": {
            "proxyStandardStorageSlot": getContract('0x1c5a768bdb10750f9007e33243fef5f3e094ad3a', mainnetProxiesProxyStandardStorageSlotAbi, defaultSigner),
            "proxyCustomImplementation": getContract('0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b', mainnetProxiesProxyCustomImplementationAbi, defaultSigner),
        },
    };
}
