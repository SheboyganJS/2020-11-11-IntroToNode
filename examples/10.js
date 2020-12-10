const fs = require("fs").promises;

async function main() {
    const files = await fs.readdir(process.cwd());

    console.log(files);
}

main().catch((error) => {
    console.error(error.message);
});