const dados = require('./dados/dados.json');
const faturamentosEstados = require('./dados/faturamentosDosEstados')

// QUESTÃO 3
// Obter Maior e Menor faturamento

dados.sort((a, b)=> {
    if (a.valor > b.valor) {
      return 1;
    }
    if (a.valor < b.valor) {
      return -1;
    }
    return 0;
  });

  const maiorFaturamento = dados[dados.length-1];
  const menorfaturamento = dados.find(dado=> dado.valor!== 0);
  const faturamentosNulos = dados.filter(dado => dado.valor === 0);

  // Obter Média dos Faturamentos Não nulos

  const dadosSemfaturamentosNulos = dados.filter(dado => dado.valor!== 0);

  let somaDeFaturamentos = 0;

  for(let dados of dadosSemfaturamentosNulos){
     somaDeFaturamentos += dados.valor;
  }

  const mediaDeFaturamentos = (somaDeFaturamentos/(dadosSemfaturamentosNulos.length)).toFixed(3);

  // Obtendo todos os faturamentos maiores que média obtidas;

  const faturamentosAcimaDaMedia = [];
  
  for(let dados of dadosSemfaturamentosNulos){
    if(dados.valor > mediaDeFaturamentos){
      faturamentosAcimaDaMedia.push(dados)
    }
 }
// Quantidade de faturamentos maiores que a média obtida;
 const NumFaturamentoAcimaDaMedia = faturamentosAcimaDaMedia.length;

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi no dia ${menorfaturamento.dia} com um valor de R$ ${menorfaturamento.valor}.`);

console.log(`O maior valor de faturamento ocorrido em um dia do mês foi no dia ${maiorFaturamento.dia} com um valor de R$ ${maiorFaturamento.valor}.`);

console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal de R$ ${mediaDeFaturamentos} foi de ${NumFaturamentoAcimaDaMedia}.`);

// QUESTÃO 04
 const porcentagemDeFaturamentos = []
for(let dado of faturamentosEstados){
  dado.porcentagem = (dado.faturamento * 100)/somaDeFaturamentos;
  porcentagemDeFaturamentos.push(dado)
}

for(let dado of porcentagemDeFaturamentos){
  console.log(`O faturamento de ${dado.estado} foi de ${dado.porcentagem.toFixed(2)}%`)
}





  
  