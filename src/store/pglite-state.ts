/**
 * pglite-state.ts — shared PGlite health state (S24).
 *
 * Hoisted from duplicated module-level `disabled`/`warned` flags in
 * memoryIndex.ts and vectorIndex.ts into a single shared state object.
 * Prevents a failure in one index from silently disabling the other,
 * and makes the health state observable for monitoring.
 */

export interface IndexHealth {
  disabled: boolean
  warned: boolean
}

export const pgliteState: {
  memoryIndex: IndexHealth
  vectorIndex: IndexHealth
} = {
  memoryIndex: { disabled: false, warned: false },
  vectorIndex: { disabled: false, warned: false },
}

export function resetPgliteState(): void {
  pgliteState.memoryIndex.disabled = false
  pgliteState.memoryIndex.warned = false
  pgliteState.vectorIndex.disabled = false
  pgliteState.vectorIndex.warned = false
}
