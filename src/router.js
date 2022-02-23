
const publicHandler = require('./publicHandler');
const path =require("path");
const fs =require("fs")
const router = (req, res) => {
  const  url  = req.url
  console.log(url)
  if (url === '/' || url === 'index.html') {
   publicHandler(res,"index.html")
  } else if (url === "/css/style.css"){
   publicHandler(res ,url)
  }
  else if (url === "/js/index.js" || url==="/js/dom.js"){
    publicHandler(res ,url)

  }else if (url === "/search"){
   const pathfile = path.join(__dirname ,".." ,"currency.json")
   fs.readFile(pathfile , (err,data) =>{
     if(err){
       res.writeHead(500)
       res.end("server error")
     }else{
       res.writeHead(200)
       res.end(data)
     }
   })
  }
  else {
    res.writeHead(404)
    res.end('not found')
  }
};

module.exports = router;
