import { describe, it, expect } from 'vitest';
import baseline from '../tests/fixtures/export-surface.json';
import { listExports } from '../scripts/list-exports';

/**
 * Consumers (shapeshyft_client, _lib, _app, _api_mcp) must be able to take the
 * re-export version as a pure bump. Every name exported before the engine
 * extraction must still be exported.
 */
describe('shapeshyft_types export surface', () => {
  it('still exports every name from the pre-extraction baseline', () => {
    const current = new Set(listExports('src/index.ts'));
    const missing = (baseline as string[]).filter((name) => !current.has(name));
    expect(missing).toEqual([]);
  });
});
