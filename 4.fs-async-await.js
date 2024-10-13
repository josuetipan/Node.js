// Esto solo en los modulos natuivos
// que no tienen promesas nativas
//const {promisify} = require('node:util');
//const readFilePromise = promisify(fs.readFile);

const { readFile } = require("node:fs/promises");



(
    async () => {
        console.log("leyendo el primer archivo......");
        const text = await readFile("./archivo.txt", "utf-8");
        console.log("Primer text: ", text);

        console.log("-----> Hacer cosas mientras lee el archivo...");

        console.log("Leyendo el segundo archivo.......");
        const secodText = await readFile("./archivo2.txt", "utf-8");
        console.log("secondText: ", secodText);
    }
)();
