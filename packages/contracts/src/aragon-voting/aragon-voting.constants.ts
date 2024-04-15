import { CHAINS } from '@poolsea-nestjs/constants';

export const ARAGON_VOTING_CONTRACT_TOKEN = Symbol('aragonVotingContract');

export const ARAGON_VOTING_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0x2e59A20f205bB85a89C53f1936454680651E618e',
  [CHAINS.Goerli]: '0xbc0b67b4553f4cf52a913de9a6ed0057e2e758db',
  [CHAINS.Holesky]: '0xdA7d2573Df555002503F29aA4003e398d28cc00f',
  [CHAINS.Sepolia]: '0x39A0EbdEE54cB319f4F42141daaBDb6ba25D341A',
  [CHAINS.Pulsechain]: '0xf6859CB204c3e68A592403B38B1438Cdc7D85e7D',
};
