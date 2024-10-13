const os = require('node:os')

console.log('Information del sistema operaticvo:')
console.log('--------------------------------')

console.log('Nombre del sistema operativo:', os.platform())

console.log('Versión del sistema operativo:', os.release())

console.log('Arquitectura del sistema:', os.arch())

console.log('Hostname:', os.hostname())

console.log('CPU:', os.cpus())

console.log('Memoria total:', (os.totalmem() / 1024 / 1024).toFixed(2), 'MB')

console.log('Memoria disponible:', (os.freemem() / 1024 / 1024).toFixed(2), 'MB')

console.log('uptime:', os.uptime())
