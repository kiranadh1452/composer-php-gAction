const fs = require("fs");

fs.readFile("test.txt", (err, data) => {
  if (err) throw err;

  const out = data.toString().trim();

  if (out == "Line no. 123") {
    fs.appendFile("test.txt", "This is new data added over here", (err) => {
      if (err) throw err;
    });
  }
});
