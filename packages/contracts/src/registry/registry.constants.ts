import { CHAINS } from '@poolsea-nestjs/constants';

export const REGISTRY_CONTRACT_TOKEN = Symbol('registryContract');

export const REGISTRY_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0x55032650b14df07b85bF18A3a3eC8E0Af2e028d5',
  [CHAINS.Goerli]: '0x9D4AF1Ee19Dad8857db3a45B0374c81c8A1C6320',
  [CHAINS.Holesky]: '0x595F64Ddc3856a3b5Ff4f4CC1d1fb4B46cFd2bAC',
  [CHAINS.Sepolia]: '0x33d6E15047E8644F8DDf5CD05d202dfE587DA6E3',
  [CHAINS.Pulsechain]: '0x9863eA0A8a84FAC845EB1edaCf07E6D09BBba7Ea',
};
