const fs = require("fs");
fs.writeFileSync("./.env", `API=${process.env.API}\n`);
// API=https://randomuser.me/api/
