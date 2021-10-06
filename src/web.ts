import { WebPlugin } from '@capacitor/core';

import type { EchoDemoPlugin } from './definitions';

export class EchoDemoWeb extends WebPlugin implements EchoDemoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
