import { useEffect, useState } from "react";


type ScriptArgs = {
    id?: string
    src?: string
    async?: boolean
    parent?: HTMLElement | null
}


export const useScript = (args: string | ScriptArgs) => {
    const [status, setStatus] = useState("loading");
    const { id = undefined, parent = undefined, src, async = false } = typeof args === "string" ? {
        src: args
    } : args;

    useEffect(() => {
        /*
         * Allow falsy src value. This is useful the src is dynamic and
         * initialized as undefined.
         */
        if (!src || typeof src !== 'string') {
            throw new Error('src value is not right!')
        }
        /*
         * Fetch existing script element by src. It may have been added by
         * another intance of this hook.
         */
        let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement;
        if (script) {
            // Grab existing script status from attribute and set to state.
            script.remove()
            setStatus(script.dataset.status || '');
        }
        else {
            // Create script
            script = document.createElement("script");
            script.id = id !== null && id !== void 0 ? id : "";
            script.src = src;
            script.async = async;
            script.dataset.status = "loading";
            // Add script to the parent
            (parent ?? globalThis.document.documentElement).append(script);
            /*
             * Store status in attribute on script
             * This can be read by other instances of this hook
             */
            const setAttributeFromEvent = (event: Event) => {
                if (script) {
                    script.dataset.status = event.type === "load" ? "ready" : "error";
                }
            };
            script.addEventListener("load", setAttributeFromEvent);
            script.addEventListener("error", setAttributeFromEvent);
        }
        /*
         * Script event handler to update status in state
         * Note: Even if the script already exists we still need to add
         * event handlers to update the state for *this* hook instance.
         */
        const setStateFromEvent = (event: Event) => {
            setStatus(event.type === "load" ? "ready" : "error");
        };
        // Add event listeners
        script.addEventListener("load", setStateFromEvent);
        script.addEventListener("error", setStateFromEvent);
        // Remove event listeners on cleanup
        return () => {
            if (script) {
                script.removeEventListener("load", setStateFromEvent);
                script.removeEventListener("error", setStateFromEvent);
            }
        };
    }, [
        src,
        parent
    ]);
    return status;
};
