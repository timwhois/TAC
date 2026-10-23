import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
const output = new URL('../public/portfolio/sample-system-concept.png', import.meta.url)
const expected = 'd85fa46bbd0b10d25e2b170504e9703abb9c171dc56cad3495861e6985371548'
const digest = data => createHash('sha256').update(data).digest('hex')
let data
try { data = await readFile(output) } catch {}
if (!data) {
  const response = await fetch('https://cdn.shopify.com/s/files/1/1009/5824/1142/files/third-axis-sample-management-concept.png?v=1792755509')
  if (!response.ok) throw new Error('Unable to import approved portfolio image')
  data = Buffer.from(await response.arrayBuffer())
  if (digest(data) !== expected) throw new Error('Portfolio image checksum mismatch')
  await mkdir(new URL('../public/portfolio/', import.meta.url), { recursive: true })
  await writeFile(output, data)
}
if (digest(data) !== expected) throw new Error('Unexpected sample concept image content')
console.log('Verified original sample concept image is bundled with this website build')
