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