const numbers = [78, 34, 23, 1, 74, 85, 65, 98, 2, 18]

// Version imperativa
let max = Number.MIN_SAFE_INTEGER
for (let index = 0; index < 10; index++) {
  if (numbers[index] > max) {
    max = numbers[index]
  }
}

console.log(max)

// Version funcional
const maxFunc = numbers.reduce(
  (max, value) => (value > max ? value : max),
  Number.MIN_SAFE_INTEGER
)
console.log(maxFunc)
