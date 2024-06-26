import { CHAINS } from '@poolsea-nestjs/constants';

export const LIDO_CONTRACT_TOKEN = Symbol('lidoContract');

export const LIDO_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  [CHAINS.Goerli]: '0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F',
  [CHAINS.Holesky]: '0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034',
  [CHAINS.Sepolia]: '0x3e3FE7dBc6B4C189E7128855dD526361c49b40Af',
  [CHAINS.Pulsechain]: '0xA484daAeaB44914d5F55712075e9Be6983400Eb1',
};
