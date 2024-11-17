// Documentation: https://sdk.netlify.com
import { NetlifyExtension } from "@netlify/sdk";

const extension = new NetlifyExtension();

extension.addEdgeFunctions("./src/edge-functions", {
  prefix: "ef_prefix",
  shouldInjectFunction: () => {
    // If the edge function is not enabled, return early
    if (!process.env["MYEXTENSION_ENABLED"]) {
      return;
    }
    return true;
  },
});

export { extension };

