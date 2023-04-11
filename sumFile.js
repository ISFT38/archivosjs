const lineByLine = require("n-readlines")
const reader = new lineByLine("numbers.data")

let sum = 0
while ((line = reader.next())) {
  sum = sum + parseInt(line.toString("ascii"))
}
console.log(sum)
