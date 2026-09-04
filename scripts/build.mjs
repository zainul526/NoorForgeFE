import {
  mkdir,
  copyFile,
  rm
} from "node:fs/promises";

const outputFolders = [
  "dist",
  "build",
  "out"
];

for (const folder of outputFolders) {
  await rm(folder, {
    recursive: true,
    force: true
  });

  await mkdir(folder, {
    recursive: true
  });

  await copyFile(
    "index.html",
    `${folder}/index.html`
  );
}

console.log(
  "NoorForge maintenance page built successfully."
);