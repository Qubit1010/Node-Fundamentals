const http = require("node:http");
const fs = require("node:fs")

/** Plain Text
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Sup Baby!");
  console.log(res)
});
*/

/** JSON response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.end(JSON.stringify(superHero));
   
});
*/

/** HTML response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // res.end("<h1>hello world!</h1>");
  // const html = fs.readFileSync("./index.html", "utf-8")
  // res.end(html)
  // for performance
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});
*/

// /** HTML template
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const name = "Vishwas";
  let html = fs.readFileSync(`${__dirname}/index.html`, "utf8");
  html = html.replace("{{name}}", name);
  res.end(html);
});
/////*/


server.listen(3000, () => {
  console.log("Server running on port 3000");
});
