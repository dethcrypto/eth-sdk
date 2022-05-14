import { Contract } from 'ethers';
import mainnet_tokens_dai_abi from '../../eth-sdk/abis/mainnet/tokens/dai.json';
import mainnet_tokens_mkr_abi from '../../eth-sdk/abis/mainnet/tokens/mkr.json';
import mainnet_uniswap_abi from '../../eth-sdk/abis/mainnet/uniswap.json';
import mainnet_proxies_proxyStandardStorageSlot_abi from '../../eth-sdk/abis/mainnet/proxies/proxyStandardStorageSlot.json';
import mainnet_proxies_proxyCustomImplementation_abi from '../../eth-sdk/abis/mainnet/proxies/proxyCustomImplementation.json';
export function getContract(address, abi, defaultSignerOrProvider) {
    return new Contract(address, abi, defaultSignerOrProvider);
}
export function getMainnetSdk(defaultSignerOrProvider) {
    return {
        "tokens": {
            "dai": getContract('0x6B175474E89094C44Da98b954EedeAC495271d0F', mainnet_tokens_dai_abi, defaultSignerOrProvider),
            "mkr": getContract('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', mainnet_tokens_mkr_abi, defaultSignerOrProvider),
        },
        "uniswap": getContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', mainnet_uniswap_abi, defaultSignerOrProvider),
        "proxies": {
            "proxyStandardStorageSlot": getContract('0x1c5a768bdb10750f9007e33243fef5f3e094ad3a', mainnet_proxies_proxyStandardStorageSlot_abi, defaultSignerOrProvider),
            "proxyCustomImplementation": getContract('0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b', mainnet_proxies_proxyCustomImplementation_abi, defaultSignerOrProvider),
        },
    };
}
