const fs = require('fs');

const dankmeme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/png' });
  response.write(dankmeme);
  response.end();
};

module.exports.getMeme = getMeme;
