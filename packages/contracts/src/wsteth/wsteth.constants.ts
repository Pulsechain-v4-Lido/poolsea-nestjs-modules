import { CHAINS } from '@poolsea-nestjs/constants';

export const WSTETH_CONTRACT_TOKEN = Symbol('wstethContract');

export const WSTETH_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  [CHAINS.Goerli]: '0x6320cd32aa674d2898a68ec82e869385fc5f7e2f',
  [CHAINS.Holesky]: '0x8d09a4502Cc8Cf1547aD300E066060D043f6982D',
  [CHAINS.Sepolia]: '0xB82381A3fBD3FaFA77B3a7bE693342618240067b',
  [CHAINS.Pulsechain]: '0xb701B409946C14707aAC1f10562817E485aCe608',
};