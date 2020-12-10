const fs = require("fs").promises;

const files = await fs.readdir(process.cwd());

console.log(files);

//This will fail, check 10.js