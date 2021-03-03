import { assertEquals, listenAndServe } from "./deps.ts"
import { Ngrok } from "./mod.ts"

const exchange = "hi"
const port = 8080

listenAndServe({ port }, (req) => {
    req.respond({ status: 200, body: exchange })
})

Deno.test({
    name: "Self HTTP Request via ngrok",
    fn: async () => {
        let ngrokInstance: Ngrok

        const ip = await new Promise(resolve => {
            Ngrok.create({
                protocol: "http",
                port,
            }).then(ngrok => {
                ngrokInstance = ngrok
                ngrok.addEventListener("ready", (event) => {
                    resolve(event.detail)
                }, { once: true })
            })
        })

        const response = await fetch(`https://${ip}`).then(r => r.text())
        assertEquals(response, exchange)

        ngrokInstance!.destroy()
    },
    sanitizeOps: false,
    sanitizeResources: false
})