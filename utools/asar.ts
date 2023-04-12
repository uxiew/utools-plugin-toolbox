const fs = require('fs')
const path = require('path')
const http = require('http')
const url = require('url')
const mime = require('mime')

// let asarPaths = {};

const staticFeaturesDir = 'features';
const getpath = (featureId: string, ...filename: string[]) => {
    return path.join(__dirname, staticFeaturesDir, featureId + '.asar', ...filename)
}

/**
 * @description asar 的文件名一定要与 feature 的 id 相同
 */
export function startAsarServer(featureId: string, port: number = 20123, cache: number = 60) {
    // asarPaths['/'] = asarPaths['/index.html']

    let server = http.createServer((req, res) => {
        const pathname = url.parse(req.url).pathname
        const found = getpath(featureId, pathname === '/' ? 'index.html' : pathname)

        console.log(req.method + " " + pathname + " -> " + (found ? 200 : 404))

        if (!found) {
            res.writeHead(404)
            res.end('not found')
            return
        }

        const headers = {}
        if (cache) headers['cache-control'] = 'max-age=' + cache
        headers['content-type'] = mime.getType(pathname == '/' ? 'index.html' : pathname);

        res.writeHead(200, headers)

        fs.readFile(found, {
            encoding: "utf8"
        }, (err: NodeJS.ErrnoException | null, buf: Buffer) => {
            if (err) {
                console.error(err)
                res.writeHead(500)
                res.end('internal server error')
                return
            }
            res.end(buf)
        })

    })


    server.listen(port, (err: any) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }

        console.log('asar-server is listening on ' + port)
    })


    // listen utools out
    utools.onPluginOut(() => {
        server.close();
        server = null
    });

    return `http://127.0.0.1:${port}/`
}

