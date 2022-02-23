
const publicHandler = require('./publicHandler');
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
    apiHandler(res,"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json")
  }
  else {
    res.writeHead(404)
    res.end('not found')
  }
};

module.exports = router;
