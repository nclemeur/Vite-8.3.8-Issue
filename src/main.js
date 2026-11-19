import { state as relative } from './state.js'
import { state as aliased } from '@/state.js'

// one module, imported twice: must be the same instance
console.log('same instance:', relative === aliased)
