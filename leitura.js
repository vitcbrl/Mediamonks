const fs = require('fs');

function lerArquivoJson(nomeArquivo) {
  try {
    const conteudoArquivo = fs.readFileSync(nomeArquivo, 'utf8');
    const objetoJson = JSON.parse(conteudoArquivo);
    return objetoJson;
  } catch (erro) {
    console.error(`Erro ao ler o arquivo ${nomeArquivo}: ${erro}`);
    return null;
  }
}

// Exemplo:
const database1 = lerArquivoJson('broken_database_1.json');
const database2 = lerArquivoJson('broken_database_2.json');

console.log('Database 1:', database1);
console.log('Database 2:', database2);
