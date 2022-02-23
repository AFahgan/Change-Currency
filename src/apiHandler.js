const apiHandler = (res) => {
  res.writeHead(200,{'content-type' : "application/json"})
  res.end(JSON.stringify(currency))
}

module.exports = apiHandler