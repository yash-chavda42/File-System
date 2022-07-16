const prompt = require("prompt-sync")();
const fs = require("fs");
const path = require("path");

const filesPath = path.join(__dirname, "Files");

console.log("\n\nWelcom The Node-JS File System");
console.log("0> Exit From System");
console.log("1> Add-File");
console.log("2> Edit-File");
console.log("3> Delete-File");
console.log("4> Rename-File");

let op, filename, filecontent;
while (op != 0) {
  console.log();
  op = prompt("Enter The Number Perfrom Opration: ");

  switch (op) {
    case "0":
      op = 0;
      break;

    case "1":
      console.log();
      filename = prompt("Enter The File Name To Add: "); //adding file
      // filename = path.join(filename, ".txt");
      filecontent = prompt("Enter The File Content: ");
      fs.writeFileSync(`${filesPath}/${filename}.txt`, filecontent);
      break;

    case "2":
      console.log();
      filename = prompt("Enter The Name Of The File To Edit: "); //adding file
      filecontent = prompt("Enter The File Content: ");
      try {
        fs.appendFile(`${filesPath}/${filename}.txt`, filecontent, (err) => {
          if (err) {
            console.log("Error updating file...");
          } else console.log("File is updated...");
        });
      } catch (e) {
        console.log("\n>>> This File Is Not Available.\n");
      }

      break;

    case "3":
      console.log();
      filename = prompt("Enter The File Name To Delete:"); //delete file
      try {
        fs.unlinkSync(`${filesPath}/${filename}.txt`, (err) => {
          if (err) {
            console.log("\n>>> This File Is Not Available.");
          } else {
            console.log("\n>>> File Deleted\n");
          }
        }); //delete files
      } catch (e) {
        console.log("\n>>> This File Is Not Available.");
      }
      break;
    
      case "4":
      console.log();
      filename = prompt("Enter The Old File Name:"); //old file
      newfile = prompt("Enter The new File Name:"); //new file
      try {
        fs.rename(`${filesPath}/${filename}.txt`,`${filesPath}/${newfile}.txt`, (err) => {
          if (err) {
            console.log("\n>>> This File Is Not Available.");
          } else {
            console.log("\n>>> File Renamed successfully\n");
          }
        }); //
      } catch (e) {
        console.log("\n>>> This File Is Not Available.");
      }
      break;
    default:
      console.log("\n>>> Please Choose The Right Option\n");
  }
}
