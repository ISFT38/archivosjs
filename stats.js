const fs = require("fs")

fs.stat("/home/victor", (err, stats) => {
  if (err) {
    console.err(err)
  } else {
    console.dir(stats)
    console.log(`Es un archivo: ${stats.isFile()}`)
    console.log(`Es un directorio: ${stats.isDirectory()}`)
    console.log(`Es un enlace: ${stats.isSymbolicLink()}`)
  }
})
