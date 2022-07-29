// QUESTÃO 02 - Rodar com o node com o nome do arquivo e chamar as funções ou descomentar os testes

function imprimirSequenciaFibonacci(num){
    let primeiro=0;
    let segundo=1;
    let termo = 0;
    let count = 0;
    const sequencia = []

    while(count<num){
        while(count < 2){
            termo = primeiro + count;
            sequencia.push(termo);
            count++;
            if(count === num){
                const numVerificado = sequencia.includes(num);
                if (numVerificado){
                  return  console.log( `A sequência de Fibonacci de ${num} é ${sequencia} e ${num} pertence a sua sequência`);
                } else {
                  return  console.log( `A sequência de Fibonacci de ${num} é ${sequencia} e ${num} não pertence a sequência`);
                }
                
            }
             
        }
        termo = primeiro + segundo;
        primeiro = segundo;
        segundo = termo;
        sequencia.push(termo)
        count++;
    
    }

    const numVerificado = sequencia.includes(num);
    if (numVerificado){
        const i = sequencia.indexOf(num)
        console.log( `A sequência de Fibonacci de ${num} é ${sequencia} e ${num} pertence a sequência e está na posição ${i + 1 }`);
    } else {
        console.log( `A sequência de Fibonacci de ${num} é ${sequencia} e ${num} não pertence a sequência`);
    }
    
    
    
};

// imprimirSequenciaFibonacci(2)
// imprimirSequenciaFibonacci(13)
// imprimirSequenciaFibonacci(15)
// imprimirSequenciaFibonacci(14)