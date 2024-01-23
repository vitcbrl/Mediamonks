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
