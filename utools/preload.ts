
import { run } from './command'
export * as fs from 'node:fs'
export * from './command'




export function osascriptExec(script: string) {
    return `osascript -e '${script}'`
}


export function openUrl(app: string, url: string) {
    run(`open -a "${app}" "${url}"`)
}
