const fs = require('fs');
const csv = require('csv-parser');

// Função para ler o arquivo CSV e retornar uma promessa com os dados dos atletas chineses de tênis de mesa
export const lerAtletasChineses = (caminhoArquivo) => {
    return new Promise((resolve, reject) => {
        let atletasChineses = [];
        fs.createReadStream(caminhoArquivo)
            .pipe(csv())
            .on('data', (linha) => {
                if (linha.NOC === "CHN") {
                    atletasChineses = [
                        ...atletasChineses,
                        { ...linha } 
                    ];
                }
            })
            .on('end', () => {
                resolve(atletasChineses);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};
