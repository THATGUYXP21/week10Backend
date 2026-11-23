import { readFile } from "fs/promises";

async function test() {
    const text = await readFile(DATA_FILE, "utf-8");
    console.log(typeof text);
    console.log(text);

    const pets = JSON.parse(text);
    console.log(typeof pets);
    console.log(pets);
}

test();