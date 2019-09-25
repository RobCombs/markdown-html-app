//File used for retrieving markdown
const fs = require('fs');

export const getMarkDown = path => {
    return fs.readFileSync(path);
} 