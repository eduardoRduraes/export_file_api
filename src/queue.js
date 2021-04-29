const fs = require('fs').promises;
const path = require('path');


async function list(directory, files) {
    if (!files)
        files = [];

    let fileList = await fs.readdir(directory);

    for (let k in fileList) {
        let stat = await fs.stat(path.resolve(__dirname, 'files', `${fileList[k]}`));

        if (stat.isDirectory()) {
            await list(path.resolve(__dirname, 'files', `${fileList[k]}`), files);
        } else {
            files.push(path.resolve(__dirname, 'files', `${fileList[k]}`));
        }
    }

    return files;
}


module.exports = list;