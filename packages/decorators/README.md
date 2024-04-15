# Nestjs Decorators

Nestjs Decorators for Lido Finance projects.
Part of [Lido NestJS Modules](https://github.com/lidofinance/lido-nestjs-modules/#readme)

## Install

```bash
yarn add @poolsea-nestjs/decorators
```

## Usage

### OneAtTime

The decorator does not allow to call the method more than once at a time.

```ts
import { OneAtTime } from '@poolsea-nestjs/decorators';

export class TestService {
  @OneAtTime()
  async foo() {
    // do some async work
  }
}
```
