import { registerPlugin } from '@capacitor/core';

import type { EchoDemoPlugin } from './definitions';

const EchoDemo = registerPlugin<EchoDemoPlugin>('EchoDemo', {
  web: () => import('./web').then(m => new m.EchoDemoWeb()),
});

export * from './definitions';
export { EchoDemo };
