import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

// false during server rendering and the hydration pass, true afterwards.
// Use it to gate anything that depends on browser-only state (query string,
// clock, storage) so the first client render matches the prerendered HTML.
export function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
