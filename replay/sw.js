importScripts("https://cdn.jsdelivr.net/npm/replaywebpage@1.8.12/sw.js");

self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    if (url.includes('__wb_method=POST')) {
        event.respondWith(
            new Response('<html><body><h2>Page Not Available</h2><p>This page was not captured in the simulator archive.</p></body></html>', 
            { headers: { 'Content-Type': 'text/html' }})
        );
    }
});
