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

/*Teste para a função lerArquivoJson
const dadosTesteLeitura = lerArquivoJson('broken_database_1.json');
console.log('Dados lidos:', dadosTesteLeitura);*/ 

function corrigirNomesEMarcas(dados) {
  return dados.map(item => {
    if (item.nome) {
      item.nome = item.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');
    }
    if (item.marca) {
      item.marca = item.marca.replace(/æ/g, 'a').replace(/ø/g, 'o');
    }
    return item;
  });
}


/*Teste para a função corrigirNomes
const dadosTesteNomes = [{ nome: 'Møbi' }, { nome: 'Picæntø' }];
console.log('Antes da correção:', dadosTesteNomes);
const dadosNomesCorrigidos = corrigirNomes(dadosTesteNomes);
console.log('Após a correção:', dadosNomesCorrigidos);*/ 

function corrigirVendas(dados) {
  return dados.map(item => {
    if (typeof item.vendas === 'string') {
      item.vendas = parseInt(item.vendas, 10);
    }
    return item;
  });
}

/*Teste para a função corrigirVendas
const dadosTesteVendas = [{ vendas: '10' }, { vendas: 5 }];
console.log('Antes da correção:', dadosTesteVendas);
const dadosVendasCorrigidos = corrigirVendas(dadosTesteVendas);
console.log('Após a correção:', dadosVendasCorrigidos);*/ 

function exportarDadosCorrigidos(dados, caminhoArquivo) {
  try {
    const dadosJson = JSON.stringify(dados, null, 2);
    fs.writeFileSync(caminhoArquivo, dadosJson, 'utf8');
    console.log('Dados exportados com sucesso para:', caminhoArquivo);
  } catch (erro) {
    console.error('Erro ao exportar dados:', erro);
  }
}

//broken_database_1.json
const dados1 = lerArquivoJson('broken_database_1.json');
const dados1Corrigidos = corrigirVendas(corrigirNomesEMarcas(dados1));
exportarDadosCorrigidos(dados1Corrigidos, 'database_corrigido_1.json');

//broken_database_2.json
const dados2 = lerArquivoJson('broken_database_2.json');
const dados2Corrigidos = corrigirVendas(corrigirNomesEMarcas(dados2));
exportarDadosCorrigidos(dados2Corrigidos, 'database_corrigido_2.json');