const fs = require('node:fs')

// Leemos el contenido del archivo

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size / 1024 / 1024 // Tamaño en MB
)
