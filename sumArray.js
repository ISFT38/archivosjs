const numbers = [78, 34, 23, 1, 74, 85, 65, 98, 2, 18]

// Version imperativa
let sum = 0
for (let index = 0; index < 10; index++) {
  sum = sum + numbers[index]
}

console.log(sum)

// Version funcional
const sumFunc = numbers.reduce((accum, value) => accum + value, 0)
console.log(sumFunc)
