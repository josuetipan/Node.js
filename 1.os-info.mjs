import { platform, release, arch, hostname, cpus, totalmem, freemem, uptime } from 'node:os'

console.log('Information del sistema operaticvo:')
console.log('--------------------------------')
console.log('Nombre del sistema operativo:', platform())

console.log('Versión del sistema operativo:', release())

console.log('Arquitectura del sistema:', arch())

console.log('Hostname:', hostname())

console.log('CPU:', cpus())

console.log('Memoria total:', (totalmem() / 1024 / 1024).toFixed(2), 'MB')

console.log('Memoria disponible:', (freemem() / 1024 / 1024).toFixed(2), 'MB')

console.log('uptime:', uptime())
