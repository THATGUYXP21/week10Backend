import { writeFile } from "fs/promises";

await writeFile("./data/hello.txt", "Goodbye",);
const text = await readFile("./data/hello.txt", "utf-8");
console.log("File written!");

const me = { name: "Cameron", city: "Columbus", favoriteFood: "Pizza" };
await writeFile("./data/me.json", JSON.stringify(me, null, 2), "utf-8");
const text2 = await readFile("./data/me.json", "utf-8");

console.log(typeof text2);

const data = JSON.parse(text2);
console.log(typeof data);
console.log(data);
