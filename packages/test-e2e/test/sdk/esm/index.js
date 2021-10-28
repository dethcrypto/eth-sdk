import { Contract } from 'ethers';
import daiAbi from '../../../eth-sdk/abis/mainnet/tokens/dai.json';
import mkrAbi from '../../../eth-sdk/abis/mainnet/tokens/mkr.json';
import uniswapAbi from '../../../eth-sdk/abis/mainnet/uniswap.json';
export function getContract(address, abi, defaultSigner) {
    return new Contract(address, abi, defaultSigner);
}
export function getMainnetSdk(defaultSigner) {
    return {
        "tokens": {
            "dai": getContract('0x6B175474E89094C44Da98b954EedeAC495271d0F', daiAbi, defaultSigner),
            "mkr": getContract('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2', mkrAbi, defaultSigner),
        },
        "uniswap": getContract('0x1F98431c8aD98523631AE4a59f267346ea31F984', uniswapAbi, defaultSigner),
    };
}
