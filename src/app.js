const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';
const VERSION = process.env.VERSION;
const cookieParser = require('cookie-parser');
let count = 0;
app.use(cookieParser());

app.get('/', (req, res) => {
  // read cookies
  //console.log(req.cookies) 
  let options = {
    maxAge: 1000 * 60 * 60* 1, // would expire after 1 hour
    httpOnly: false, // The cookie is not only accessible by the web server
  }
  res.cookie('cookie:version', VERSION) // options is optional
  res.setHeader('X-Service-Version', VERSION);  
  res.send(VERSION);
  count++;
  console.log(`Got request: ${count} `);
})

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT} version: ${VERSION}`);
})
