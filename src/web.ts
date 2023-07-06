import { WebPlugin } from '@capacitor/core';

import type { MapboxPlugin } from './definitions';

export class MapboxWeb extends WebPlugin implements MapboxPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
