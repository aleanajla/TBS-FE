const HTTP = window.location.protocol

const hostname = {
    local: `${HTTP}//localhost`
}

const port = {
    local: ":3000"
}

export const API_LOCAL = `https://node-3.abimanyu.dev`
// export const API_LOCAL = hostname["local"] + port["local"]