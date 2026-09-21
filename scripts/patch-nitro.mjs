import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

// 1. Patch node_modules/nitro/dist/vite.mjs
const viteMjsPath = path.join(root, "node_modules", "nitro", "dist", "vite.mjs");
if (fs.existsSync(viteMjsPath)) {
  let content = fs.readFileSync(viteMjsPath, "utf-8");
  if (content.includes("name: (id) => libChunkName(id)")) {
    content = content.replace(
      "name: (id) => libChunkName(id)",
      'name: "vendor"'
    );
    fs.writeFileSync(viteMjsPath, content, "utf-8");
    console.log("[patch-nitro] Patched nitro/dist/vite.mjs successfully.");
  }
}

// 2. Patch node_modules/nitro/dist/_build/common.mjs
const commonMjsPath = path.join(root, "node_modules", "nitro", "dist", "_build", "common.mjs");
if (fs.existsSync(commonMjsPath)) {
  let content = fs.readFileSync(commonMjsPath, "utf-8");
  if (content.includes("function pathToPkgName(path) {\n\tlet pkgName = path.match")) {
    content = content.replace(
      "function pathToPkgName(path) {\n\tlet pkgName = path.match",
      'function pathToPkgName(path) {\n\tif (typeof path !== "string") path = path?.id || path?.name || "";\n\tlet pkgName = path.match'
    );
  }
  if (content.includes("function libChunkName(id) {\n\tconst pkgName = pathToPkgName(id);\n\treturn pkgName ? `_libs/${pkgName}` : void 0;\n}")) {
    content = content.replace(
      "function libChunkName(id) {\n\tconst pkgName = pathToPkgName(id);\n\treturn pkgName ? `_libs/${pkgName}` : void 0;\n}",
      'function libChunkName(id) {\n\tconst pkgName = pathToPkgName(id);\n\treturn pkgName ? `_libs/${pkgName}` : "vendor";\n}'
    );
  }
  fs.writeFileSync(commonMjsPath, content, "utf-8");
  console.log("[patch-nitro] Patched nitro/dist/_build/common.mjs successfully.");
}
