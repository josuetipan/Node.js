// Esto solo en los modulos natuivos
// que no tienen promesas nativas
//const {promisify} = require('node:util');
//const readFilePromise = promisify(fs.readFile);



import {readFile} from 'node:fs/promises';

Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo2.txt", "utf-8")
    
]).then(([text, secodText]) =>{
    console.log("Primer texto: ", text);
    console.log("Segundo texto: ", secodText);
} );




