const fs = require("fs")

const texto =
  "En un lugar de la mancha, de cuyo nombre no quiero acordarme...\n"

fs.writeFile("quijote.txt", texto, (err) => {
  if (err) {
    console.error(err)
  }
})
