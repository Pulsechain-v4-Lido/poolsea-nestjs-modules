import { CHAINS } from '@lido-nestjs/constants';

export const VALIDATORS_EXIT_BUS_ORACLE_HASH_CONSENSUS_TOKEN = Symbol(
  'validatorsExitBusOracleHashConsensus',
);

export const VALIDATORS_EXIT_BUS_ORACLE_HASH_CONSENSUS_ADDRESSES = {
  [CHAINS.Mainnet]: '0x7FaDB6358950c5fAA66Cb5EB8eE5147De3df355a',
  [CHAINS.Goerli]: '0x8374B4aC337D7e367Ea1eF54bB29880C3f036A51',
};