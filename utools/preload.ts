
import { join } from 'node:path'
import { readFileSync } from 'node:fs'
import { run } from './command'


export { startAsarServer } from './asar'
export * from './command'
export * as fs from 'node:fs';
export { join as pathJoin } from 'node:path';


// loadFile(l().join(__dirname, "tpl", "index.html"))

const utoolsAppPath = join(utools.getPath('exe'), '..', '..', 'Resources', 'app.asar', "dist")


window.index = "file://" + join(utoolsAppPath, "tpl", "index.html")
window.jsFile = "file://" + join(utoolsAppPath, "tpl", "index.js")



export const getIndexjs = () => {
    return readFileSync(join(utoolsAppPath, "tpl", "index.js"), 'utf8')
}

export const getIndexHTML = () => {
    return readFileSync(join(utoolsAppPath, "tpl", "index.html"), 'utf8')
}

// from `public` dir
const staticFeaturesDir = 'features';

export const readAsarFile = (featureId: string, ...filename: string[]) => {
    return readFileSync(join(__dirname, staticFeaturesDir, featureId + '.asar', ...filename), 'utf8')
}


export function osascriptExec(script: string) {
    return `osascript -e '${script}'`
}

export function openUrl(app: string, url: string) {
    run(`open -a "${app}" "${url}"`)
}


