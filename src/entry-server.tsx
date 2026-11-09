import { renderToReadableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.tsx'

export { ROUTE_SEO } from './components/RouteSeo.tsx'

// Server entry used only at build time by scripts/prerender.mjs.
// Renders each route to static HTML so crawlers and reviewers see the
// real content (and the correct per-route canonical) in the raw HTML,
// instead of an empty <div id="root"> with a homepage canonical.
export async function render(url: string): Promise<string> {
    const stream = await renderToReadableStream(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>,
        {
            onError: (err) => {
                console.error(`prerender error for ${url}:`, err)
            },
        },
    )
    // Wait until every lazy route (Suspense boundary) has resolved,
    // so the output contains the full page, not the "Loading..." fallback.
    await stream.allReady
    const reader = stream.getReader()
    const decoder = new TextDecoder()
    let html = ''
    while (true) {
        const { done, value } = await reader.read()
        if (done) break
        html += decoder.decode(value, { stream: true })
    }
    html += decoder.decode()
    return html
}
