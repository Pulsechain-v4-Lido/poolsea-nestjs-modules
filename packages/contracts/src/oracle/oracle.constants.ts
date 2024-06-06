import { CHAINS } from '@poolsea-nestjs/constants';

export const ORACLE_CONTRACT_TOKEN = Symbol('oracleContract');

export const ORACLE_CONTRACT_ADDRESSES = {
  [CHAINS.Mainnet]: '0x442af784A788A5bd6F42A01Ebe9F287a871243fb',
  [CHAINS.Goerli]: '0x24d8451BC07e7aF4Ba94F69aCDD9ad3c6579D9FB',
  [CHAINS.Holesky]: '0x072f72BE3AcFE2c52715829F2CD9061A6C8fF019',
  [CHAINS.Sepolia]: '0x3483c140EF7F2716460198Ff831a8e53F05F1606',
  [CHAINS.Pulsechain]: '0x0BB280DF53dA700b7F1beD5A126C32F949A0EB04',
};
