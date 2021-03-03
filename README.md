<div align="center">
    <img src="assets/logo.svg" width="350" height="350" alt="trains between usb and usb port abstract illustration">
    <h1>ngrok</h1>
    <p>
        <b>Expose your localhost to the web. Ultra-simple deno wrapper for ngrok</b>
    </p>
    <p>
        <img alt="build status" src="https://img.shields.io/github/workflow/status/KhushrajRathod/ngrok/Deno?label=checks" >
        <img alt="language" src="https://img.shields.io/github/languages/top/KhushrajRathod/ngrok" >
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/KhushrajRathod/ngrok">
        <img alt="issues" src="https://img.shields.io/github/issues/KhushrajRathod/ngrok" >
        <img alt="license" src="https://img.shields.io/github/license/KhushrajRathod/ngrok">
        <img alt="version" src="https://img.shields.io/github/v/release/KhushrajRathod/ngrok">
    </p>
    <p>
        <b><a href="https://deno.land/x/ngrok">View on deno.land</a></b>
    </p>
    <br>
    <br>
    <br>
</div>

## Usage

```ts
import { Ngrok } from "https://deno.land/x/ngrok@3.1.1/mod.ts"

const ngrok = await Ngrok.create({
    protocol: "http",
    port: 8080,
})

ngrok.addEventListener("ready", (event) => {
    console.log(event.detail) // Outputs a URL without the protocol, such as "33a229cb0344.ngrok.io"
})

// ...

await ngrok.destroy()
```

- `Ngrok.create` accepts `NgrokOptions`

```ts
interface NgrokOptions {
    protocol: string
    port: number
    region?: string
    subdomain?: string
    authtoken?: string
    extraArgs?: string[]
}
```

### Disconnecting

Due to the way child-processes work, ngrok will continue running in the
background even after your program exits unless you destroy the instance

```ts
import { Ngrok } from "https://deno.land/x/ngrok@3.1.1/mod.ts"

const ngrok = await Ngrok.create({
    protocol: "http",
    port: 8080,
})

await ngrok.destroy()
```

- Optionally provide an exit code: `await ngrok.destroy(9)`

### API

See [generated documentation](https://doc.deno.land/https/deno.land/x/ngrok@3.1.1/mod.ts)

## Permissions

- --allow-read
- --allow-write
- --allow-env
- --allow-net
- --allow-run

Also requires --unstable

```bash
deno run --unstable --allow-read --allow-write --allow-env --allow-net --allow-run test.ts
```

alternatively, specify only -A

```bash
deno run --unstable -A test.ts
```

## Supporters

[![Stargazers repo roster for @KhushrajRathod/ngrok](https://reporoster.com/stars/KhushrajRathod/ngrok)](https://github.com/KhushrajRathod/ngrok/stargazers)

[![Forkers repo roster for @KhushrajRathod/ngrok](https://reporoster.com/forks/KhushrajRathod/ngrok)](https://github.com/KhushrajRathod/ngrok/network/members)

## Related

- [Deno modules](https://github.com/KhushrajRathod/denoModules)
