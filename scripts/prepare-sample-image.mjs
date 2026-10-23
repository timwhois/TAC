import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
const output = new URL('../public/portfolio/sample-system-concept.png', import.meta.url)
const expectedWidth = 1536
const digest = data => createHash('sha256').update(data).digest('hex')
let data
try { data = await readFile(output) } catch {}
if (!data) {
  const response = await fetch('https://cdn.shopify.com/s/files/1/1009/5824/1142/files/third-axis-sample-management-concept.png?v=1792755509')
  if (!response.ok) throw new Error('Unable to import approved portfolio image')
  data = Buffer.from(await response.arrayBuffer())
  if (data.subarray(0,8).toString('hex') !== '89504e470d0a1a0a' || data.readUInt32BE(16) !== expectedWidth) throw new Error('Unexpected portfolio image response')
  await mkdir(new URL('../public/portfolio/', import.meta.url), { recursive: true })
  await writeFile(output, data)
}
if (data.subarray(0,8).toString('hex') !== '89504e470d0a1a0a') throw new Error('Unexpected sample concept image format')
console.log('Verified original sample concept image is bundled with this website build')
