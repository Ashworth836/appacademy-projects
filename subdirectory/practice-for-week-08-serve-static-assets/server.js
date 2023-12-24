const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  let reqPath = req.url.split('/');

  if(reqPath[1] === 'static'){
    let fileType;

    const reqType = req.url.split('.')[1];

    const staticFile = fs.readFileSync('./assets/' + reqPath.slice(2).join('/'));

    if(reqType === 'css'){
      fileType = 'text/css';
    }

    if(reqType === 'jpeg'){
      fileType = 'image/jpeg';
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', fileType);
    return req.end(staticFile);
  }


  const html = fs.readFileSync('./index.html', 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  return res.end(html);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));