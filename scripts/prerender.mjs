import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Build-time prerender: after `vite build` and the SSR build, render every
// route to static HTML and write one index.html per route into dist/.
// Each file carries its own rendered content plus the route's title,
// description and canonical, so no-JS crawlers and reviewers see the real
// page instead of an empty SPA shell with a homepage canonical.
// Run by `npm run build`. Fails the build if any route fails to render.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')

const server = await import('../dist-server/entry-server.js')
const { render, ROUTE_SEO } = server

function escapeAttr(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function replaceMeta(html, route, seo) {
    const url = `https://www.raddigo.tech${route === '/' ? '/' : route}`
    const title = escapeAttr(seo.title)
    const description = escapeAttr(seo.description)
    let out = html
    out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    out = out.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="${description}">`,
    )
    out = out.replace(
        /<meta property="og:title" content="[^"]*">/,
        `<meta property="og:title" content="${title}">`,
    )
    out = out.replace(
        /<meta property="og:description" content="[^"]*">/,
        `<meta property="og:description" content="${description}">`,
    )
    out = out.replace(
        /<meta property="og:url" content="[^"]*">/,
        `<meta property="og:url" content="${url}">`,
    )
    out = out.replace(
        /<meta name="twitter:title" content="[^"]*">/,
        `<meta name="twitter:title" content="${title}">`,
    )
    out = out.replace(
        /<meta name="twitter:description" content="[^"]*">/,
        `<meta name="twitter:description" content="${description}">`,
    )
    out = out.replace(
        /<meta property="twitter:url" content="[^"]*">/,
        `<meta property="twitter:url" content="${url}">`,
    )
    out = out.replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${url}" />`,
    )
    return out
}

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
if (!template.includes('<div id="root"></div>')) {
    throw new Error('prerender: template dist/index.html has no <div id="root"></div>')
}

for (const route of Object.keys(ROUTE_SEO)) {
    const seo = ROUTE_SEO[route]
    const rendered = await render(route)
    if (!rendered || rendered.length < 500) {
        throw new Error(`prerender: route ${route} rendered too little HTML (${rendered?.length ?? 0} chars)`)
    }
    let html = replaceMeta(template, route, seo)
    html = html.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
    const outDir = route === '/' ? distDir : path.join(distDir, route.slice(1))
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
    console.log(`prerender: ${route} -> ${path.relative(root, path.join(outDir, 'index.html'))} (${rendered.length} chars)`)
}
console.log(`prerender: done, ${Object.keys(ROUTE_SEO).length} routes`)
