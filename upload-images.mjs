// Upload local image files to Sanity and print their asset refs for an images.json.
//   node upload-images.mjs <file> [<file> ...]
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { basename } from "node:path";

const cfg = JSON.parse(readFileSync(process.env.HOME + "/.config/sanity/config.json", "utf8"));
const c = createClient({ projectId: "25tuybj3", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token: cfg.authToken });

for (const file of process.argv.slice(2)) {
  const asset = await c.assets.upload("image", readFileSync(file), { filename: basename(file) });
  console.log(`${basename(file)}\t${asset._id}\t${asset.metadata?.dimensions?.width}x${asset.metadata?.dimensions?.height}`);
}
