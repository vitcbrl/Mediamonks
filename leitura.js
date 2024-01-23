const fs = require('fs');

function lerArquivoJson(caminhoArquivo) {
  try {
    const dados = fs.readFileSync(caminhoArquivo, 'utf8');
    return JSON.parse(dados);
  } catch (erro) {
    console.error('Erro ao ler o arquivo:', erro);
    return null;
  }
}

// Teste para a função lerArquivoJson
const dadosTesteLeitura = lerArquivoJson('broken_database_1.json');
console.log('Dados lidos:', dadosTesteLeitura);
