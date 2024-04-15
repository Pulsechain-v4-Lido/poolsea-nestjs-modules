import { CHAINS } from '@poolsea-nestjs/constants';
import { createInterface } from '@poolsea-nestjs/di';

export const GenesisForkVersionServiceInterface =
  createInterface<GenesisForkVersionServiceInterface>(
    'GenesisForkVersionServiceInterface',
  );

export interface GenesisForkVersionServiceInterface {
  getGenesisForkVersion(chainId: CHAINS): Promise<Buffer>;
}
