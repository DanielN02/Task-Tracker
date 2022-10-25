//Using FS Module to create local server

var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("app.json", function (err, data) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

//Update file with appendFile which can also add task to the file
var fs = require("fs");

fs.appendFile("app.json", " Study for test", function (err) {
  if (err) throw err;
  console.log("Updated");
});

//writeFile can also replace/update the contents of the file
var fs = require("fs");

fs.writeFile("app.json", "This will be replaced", function (err) {
  if (err) throw err;
  console.log("Replaced");
});

//Unlink to delete a file
var fs = require("fs");

fs.unlink("app.json", function (err) {
  if (err) throw err;
  console.log("File deleted");
});

//Past Attempt

// const fs = require("fs");

// fs.readFile("app.json", "utf-8", function (err, data) {
//   console.log(data);
// });

// fs.readFile("./app.json", "utf-8", (err, jsonString) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const data = JSON.parse(jsonString);
//   }
// });
