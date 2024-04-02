const fs = require('fs');
const csv = require('csv-parser');

// Função para ler o arquivo CSV
const lerCSV = (caminhoArquivo, callback) => {
    fs.createReadStream(caminhoArquivo)
        .pipe(csv())
        .on('data', (linha) => {
            callback(null, linha);
        })
        .on('end', () => {
            callback(null, null); // Indica o fim do arquivo
        })
        .on('error', (error) => {
            callback(error, null);
        });
};

// Função para processar as linhas do CSV
const processarLinhas = (linha) => {
    console.log('Linha processada:', linha);
};

const arquivo = 'athlete_events.csv'
// Exemplo de uso das funções
lerCSV(arquivo, (error, linha) => {
    if (error) {
        console.error('Erro ao ler o arquivo CSV:', error);
    } else if (linha !== null) {
        processarLinhas(linha);
    } else {
        console.log('\n Fim');
    }
});