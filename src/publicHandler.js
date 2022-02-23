const path = require("path")

const fs = require("fs")

const publicHandler  = (res ,url) =>{
  const pathfile = path.join(__dirname, '..', 'public', url)
  const extetion = path.extname(pathfile)
  const contentType = {
    ".html" : "text/html",
    ".css"  :'text/css',
     '.js' :'text/javascript'
  }
 
  fs.readFile(pathfile, 'utf-8',(err, data) => {
    if (err) {
      res.writeHead(500 , {'content-type' : contentType[extetion]})
      res.end('server error')
    } else {
      res.writeHead(200,{'content-type' : contentType[extetion]})
      res.end(data)
    }
  })
}
module.exports = publicHandler