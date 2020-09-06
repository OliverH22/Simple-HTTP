const fs = require('fs');

const index = fs.readFilesync(`${__dirname}/../client/client.html`);
const page2 = fs.readFilesync(`${__dirname}/../client/client2.html`);

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;