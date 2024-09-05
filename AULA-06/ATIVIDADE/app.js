// Solicita ao usuário a quantidade de parcelas
let parcelas = parseInt(prompt("Informe a quantidade de parcelas:"));
let total = 1000;
let valorParcela = total / parcelas;

for (let i = 1; i <= parcelas; i++) {
    console.log(`Parcela ${i}: R$${valorParcela}`);
}
let mprestimo = parseFloat(prompt("Informe o valor do empréstimo:"));
let parcelas = parseInt(prompt("Informe a quantidade de parcelas:"));
let valorParcela = mprestimo / parcelas;

for (let i = 1; i <= parcelas; i++) {
    let parcelaAtual = valorParcela - (i - 1) * (valorParcela * 0.05);
    console.log(`Parcela ${i}: R$${parcelaAtual}`);
}
let input;

while (true) {
    input = prompt("Digite um valor (ou 'sair' para encerrar):");
    if (input.toLowerCase() === 'sair') {
        break;
    }
    let valor = parseFloat(input);
    console.log(`Você digitou: ${valor}. O dobro é: ${valor * 2}`);
}
let soma = 0;
let contador = 0;
let input;

while (true) {
    input = prompt("Digite um valor para adicionar à soma (ou 'sair' para encerrar):");
    if (input.toLowerCase() === 'sair') {
        break;
    }
    let valor = parseFloat(input);
    soma += valor;
    contador++;
    let media = soma / contador;
    console.log(`Soma atual: ${soma}, Média atual: ${media}`);
}
