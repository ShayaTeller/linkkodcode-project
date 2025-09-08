import { readFile, writeFile } from "fs/promises";

export async function read() {
  const data = await readFile("public/mockData.json", "utf-8");
  return data;
}

export function write(data) {
  const result = writeFile("public/mockData.json", data);
  return result;
}
