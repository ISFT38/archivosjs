const fs = require("fs")

fs.readFile("57654-0.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})
