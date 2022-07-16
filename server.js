const http = require("http"); // Handles REQUEST and RESPONSE in node.js
const prompt = require("prompt-sync")();
const fs = require("fs");
const path = require("path");
const filesPath = path.join(__dirname, "Files");
// const info = require('./script');

const information = [];
fs.readdir(filesPath, (err, files) => {
  if (err) {
    console.log("Error reading directory...");
  } else {
    files.forEach((fileName) => {
      fs.readFile(filesPath + "/" + fileName, "utf8", (err, data) => {
        if (err) {
          console.log("Error reading file...");
        } else information.push({ File: fileName, Content: data });
      });
    });
  }
  setTimeout(() => {
    console.log(information);
  }, 2000);
});

setTimeout(() => {
  http
    .createServer((request, response) => {
      response.writeHead(200, { "Content-Type": "appliaction\json" });
      response.write(JSON.stringify(information));
      response.end();
    })
    .listen(3000);
}, 2000);
