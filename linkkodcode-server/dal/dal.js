import { readFile, writeFile } from "fs/promises";

export async function read(url) {
  const data = await readFile(url, "utf-8");
  return data;
}

export async function write(url,data) {
  const result = await writeFile(url,data,'utf-8');
  return result;
}
