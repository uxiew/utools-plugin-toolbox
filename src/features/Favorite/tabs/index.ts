import * as script from './script'

export interface Tab {
    window: number
    tab: number
    title: string
    description: string
}

const { run, openUrl, execSync, osascriptExec } = window.preload


function execAppleScript(script: string) {
    run(osascriptExec(script))
}

function execGetTabs(script: string, seperator: string) {
    return new Promise<Tab[]>((resolve) => {
        const output = execSync(osascriptExec(script)).toString().trim()
        if (!output) {
            resolve([])
            return
        }
        const tabs: Tab[] = output.split('\n').map((item) => {
            const [window, tab, title, description] = item.split(seperator)
            return {
                window: parseInt(window),
                tab: parseInt(tab),
                title,
                description: decodeURI(description)
            }
        })
        resolve(tabs)
    })
}

abstract class BrowserCommand {
    protected SEPERATOR = '[,~,]'

    abstract activateTab(window: number, tab: number): void
    abstract getAllTabs(): Promise<Tab[]>
    abstract openUrl(url: string): void
}

class SafariCommand extends BrowserCommand {
    activateTab(window: number, tab: number): void {
        execAppleScript(script.activateTabScript("Safari", window, tab))
    }

    getAllTabs(): Promise<Tab[]> {
        return execGetTabs(script.allTabsScript("Safari", this.SEPERATOR), this.SEPERATOR)
    }

    openUrl(url: string) {
        openUrl('Safari', url)
    }
}

class EdgeCommand extends BrowserCommand {
    activateTab(window: number, tab: number): void {
        execAppleScript(script.activateTabScript('Microsoft Edge', window, tab))
    }

    getAllTabs(): Promise<Tab[]> {
        return execGetTabs(
            script.allTabsScript('Microsoft Edge', this.SEPERATOR),
            this.SEPERATOR
        )
    }

    openUrl(url: string) {
        openUrl('Microsoft Edge', url)
    }
}

class ChromeCommand extends BrowserCommand {
    activateTab(window: number, tab: number): void {
        execAppleScript(script.activateTabScript('Google Chrome', window, tab))
    }

    getAllTabs(): Promise<Tab[]> {
        return execGetTabs(
            script.allTabsScript('Google Chrome', this.SEPERATOR),
            this.SEPERATOR
        )
    }

    openUrl(url: string) {
        openUrl('Google Chrome', url)
    }
}

export const safari = new SafariCommand()
export const edge = new EdgeCommand()
export const chrome = new ChromeCommand()