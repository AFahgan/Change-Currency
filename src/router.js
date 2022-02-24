const publicHandler = require("./publicHandler");
const path = require("path");
const fs = require("fs");
const https = require("https");
const querystring = require("querystring");

const router = (req, res) => {
  const url = req.url;
 
  if (url === "/" || url === "index.html") {
    publicHandler(res, "index.html");
  } else if (url === "/css/style.css") {
    publicHandler(res, url);
  } else if (url === "/js/index.js" || url === "/js/dom.js") {
    publicHandler(res, url);
  } else if (url === "/search") {
    const pathfile = path.join(__dirname, "..", "currency.json");
    fs.readFile(pathfile, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("server error");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else if (url === "/results") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      https
        .get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${data}/usd.json`,
          (lists) => {
            lists.on("data", (chunk) => {
              data += chunk;
            });
            lists.on("end", () => {
              const dataBack = "{" + data.split("{")[1];

              res.end(dataBack);
            });
          }
        )
        .on("error", (err) => {
          console.log("Error: " + err.message);
          res.end(err);
        });
    });

  } else {
    res.writeHead(404);
    res.end("not found");
  }
};

module.exports = router;