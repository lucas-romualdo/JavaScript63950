// Função para capturar entradas do usuário
function capturarEntradas() {
    const operacao = prompt("Escolha uma operação (soma, subtração, multiplicação, divisão):").toLowerCase();
    const numero1 = parseFloat(prompt("Insira o primeiro número:"));
    const numero2 = parseFloat(prompt("Insira o segundo número:"));
    
    return { operacao, numero1, numero2 };
}

// Função para realizar operações
function calcular(operacao, num1, num2) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtração':
            return num1 - num2;
        case 'multiplicação':
            return num1 * num2;
        case 'divisão':
            return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        default:
            return 'Operação inválida';
    }
}

// Função principal do simulador
function simulador() {
    const { operacao, numero1, numero2 } = capturarEntradas();
    const resultado = calcular(operacao, numero1, numero2);
    
    // Exibir resultado
    alert(`Resultado: ${resultado}`);
    console.log(`Resultado: ${resultado}`);
}

// Executar o simulador
simulador();
