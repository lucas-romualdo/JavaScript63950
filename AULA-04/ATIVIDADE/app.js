function calcularICMS() {
  
    let precoCusto = parseFloat(prompt("Insira o preço de custo do produto:"));
  

    let aliquotaICMS = parseFloat(prompt("Insira a alíquota do ICMS (em %):"));
  

    let valorICMS = (precoCusto * aliquotaICMS) / 100;
  

    let precoFinal = precoCusto + valorICMS;

    console.log("O preço final com ICMS é: R$ " + precoFinal.toFixed(2));
  }
  

  calcularICMS();
  


function verificarMultiplos() {

    let numero1 = parseInt(prompt("Insira o primeiro número:"));
    let numero2 = parseInt(prompt("Insira o segundo número:"));
  

    if (numero1 % numero2 === 0) {
      console.log(numero1 + " é múltiplo de " + numero2);
    } else if (numero2 % numero1 === 0) {
      console.log(numero2 + " é múltiplo de " + numero1);
    } else {
      console.log("Nenhum dos números é múltiplo do outro.");
    }
  }

  verificarMultiplos();
  