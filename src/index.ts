import { registerPlugin } from '@capacitor/core';

import type { MapboxPlugin } from './definitions';

const Mapbox = registerPlugin<MapboxPlugin>('Mapbox', {
  web: () => import('./web').then(m => new m.MapboxWeb()),
});

export * from './definitions';
export { Mapbox };
