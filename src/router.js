
const publicHandler = require('./publicHandler');
const router = (req, res) => {
  const  url  = req.url
  console.log(url)
  if (url === '/' || url === 'index.html') {
   publicHandler(res,"index.html")
  } else if (url === "/css/style.css"){
   publicHandler(res ,url)
  }
  else if (url === "/js/index.js"){
    publicHandler(res ,url)

  }
  else {
    res.writeHead(404)
    res.end('not found')
  }
};

module.exports = router;
