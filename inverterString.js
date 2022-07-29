// QUESÃO 05

function inverterString(palavra){
    const palavraInvertida = [];

    for (let i = 1; i <= palavra.length; i++) {
        palavraInvertida.push(palavra[palavra.length - i])
        
    }

    

    console.log(`A palavra ${palavra} invertida é ${palavraInvertida.toString().replace(/,/g,"")}`)
}

inverterString("Ciro");
inverterString("Teste");

