import { CHAINS } from '@poolsea-nestjs/constants';

export const STAKING_ROUTER_CONTRACT_TOKEN = Symbol('stakingRouterContract');

export const STAKING_ROUTER_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0xFdDf38947aFB03C621C71b06C9C70bce73f12999',
  [CHAINS.Goerli]: '0xa3Dbd317E53D363176359E10948BA0b1c0A4c820',
  [CHAINS.Holesky]: '0xd6EbF043D30A7fe46D1Db32BA90a0A51207FE229',
  [CHAINS.Sepolia]: '0x4F36aAEb18Ab56A4e380241bea6ebF215b9cb12c',
  [CHAINS.Pulsechain]: '0x5b6D9088F95567139463d1e35cF62131A3902569',
};
