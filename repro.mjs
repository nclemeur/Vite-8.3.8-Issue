// Builds from the same directory spelled with a lowercase and an uppercase drive letter,
// and counts how many times src/state.js ends up in the output.
import { spawnSync } from 'node:child_process'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = import.meta.dirname
for (const drive of [dir[0].toLowerCase(), dir[0].toUpperCase()]) {
  const cwd = drive + dir.slice(1)
  const r = spawnSync('npx vite build', { cwd, shell: true, stdio: 'ignore' })
  const assets = join(cwd, 'dist', 'assets')
  const copies = readdirSync(assets)
    .filter((f) => f.endsWith('.js'))
    .map((f) => readFileSync(join(assets, f), 'utf8').split('STATE_MODULE_MARKER').length - 1)
    .reduce((a, b) => a + b, 0)
  console.log(`cwd ${cwd.slice(0, 3)}...  exit ${r.status}  copies of src/state.js: ${copies}`)
}
