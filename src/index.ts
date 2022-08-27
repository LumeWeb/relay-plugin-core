import type {Plugin, PluginAPI} from "@lumeweb/relay";
import {RPCResponse} from "@lumeweb/relay";

const plugin: Plugin = {
    name: "core",
    async plugin(api: PluginAPI): Promise<void> {
        api.registerMethod("ping", {
            cacheable: false,
            handler: async (): Promise<RPCResponse | null> => {
                return {
                    data: "pong"
                }
            }
        })

        api.registerMethod("ping", {
            cacheable: false,
            handler: async (): Promise<RPCResponse | null> => {
                return {
                    data: api.getMethods()
                }
            }
        })
    }

}

export default plugin;
