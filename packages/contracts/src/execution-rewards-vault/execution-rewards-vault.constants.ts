import { CHAINS } from '@lido-nestjs/constants';

export const EXECUTION_REWARDS_VAULT_CONTRACT_TOKEN =
  Symbol('registryContract');

export const EXECUTION_REWARDS_VAULT_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0x388C818CA8B9251b393131C08a736A67ccB19297',
  [CHAINS.Goerli]: '0x94750381bE1AbA0504C666ee1DB118F68f0780D4',
  [CHAINS.Kiln]: '0x99F98fc958E775c69EFBA92f0ADD71123f1EDbCD',
  [CHAINS.Zhejiang]: '0x216157a53e180CfA0e7b8407BA6EBbAf8Da3c0c4',
};
