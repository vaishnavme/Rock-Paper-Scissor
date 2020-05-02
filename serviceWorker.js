const staticGame = "rock-paper-scissor"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/css/bootstrap.min.css",
    "/js/app.js",
    "/img/paper.png",
    "/img/rock.png",
    "/img/scissors.png"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticGame).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})