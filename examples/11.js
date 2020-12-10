const fs = require("fs").promises;
const path = require("path");

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