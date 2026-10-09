// Injects the server-rendered homepage into dist/index.html.
import { readFileSync, writeFileSync, rmSync } from "node:fs"
import { pathToFileURL } from "node:url"
import { resolve } from "node:path"

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href)
const file = resolve("dist/index.html")
const html = readFileSync(file, "utf8")
if (!html.includes("<!--app-html-->")) throw new Error("app placeholder missing")
writeFileSync(file, html.replace("<!--app-html-->", render()))
rmSync("dist-ssr", { recursive: true, force: true })
console.log("prerendered dist/index.html")
