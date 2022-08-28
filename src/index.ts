import type { Plugin, PluginAPI, RPCResponse } from "@lumeweb/relay";

const plugin: Plugin = {
  name: "core",
  async plugin(api: PluginAPI): Promise<void> {
    api.registerMethod("ping", {
      cacheable: false,
      async handler(): Promise<RPCResponse | null> {
        return {
          data: "pong",
        };
      },
    });

    api.registerMethod("get_methods", {
      cacheable: false,
      async handler(): Promise<RPCResponse | null> {
        return {
          data: api.getMethods(),
        };
      },
    });
  },
};

export default plugin;
