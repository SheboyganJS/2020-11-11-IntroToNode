import { promises as fs } from "fs";
import path from "path";

async function main() {
    const newFileName = path.join(process.cwd(), "created.js");

    await fs.writeFile(
        newFileName,
        'console.log("This file was created programmatically");'
    )
}

main().catch((error) => {
    console.error(error.message);
});