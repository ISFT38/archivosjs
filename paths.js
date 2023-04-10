const { basename } = require("path")
const path = require("path")

const hola = "Hola mundo!"

const libro = "/home/victor/workspace/bada23/archivos/57654-0.txt"
const directorio = path.dirname(libro)
console.log(directorio)
const nombre = path.basename(libro)
console.log(nombre)
const extension = path.extname(libro)
console.log(extension)
const nombreSinExtension = path.basename(libro, extension)
console.log(nombreSinExtension)
const rutaCompleta = path.resolve("57654-0.txt")
console.log(rutaCompleta)
