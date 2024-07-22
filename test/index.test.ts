import { describe, it, expect } from 'vitest'

import Time from '../src'

describe('Time', () => {
    it('returns current hour', () => {
        expect(Time.current).toBeDefined()
    })
})