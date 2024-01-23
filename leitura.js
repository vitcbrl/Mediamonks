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
//const dadosTesteLeitura = lerArquivoJson('broken_database_1.json');
//console.log('Dados lidos:', dadosTesteLeitura);

function corrigirNomes(dados) {
  return dados.map(item => {
    if (item.nome) {
      item.nome = item.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
    }
    return item;
  });
}

// Teste para a função corrigirNomes
const dadosTesteNomes = [{ nome: 'Møbi' }, { nome: 'Picæntø' }];
console.log('Antes da correção:', dadosTesteNomes);
const dadosNomesCorrigidos = corrigirNomes(dadosTesteNomes);
console.log('Após a correção:', dadosNomesCorrigidos);