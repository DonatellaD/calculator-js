função calculadora(num1, num2) {
   const operação = Number(prompt("Digite uma das operações para que seja feito o cálculo:\n 1-Soma;\n 2-Subtração\n 3-Multiplicação\n 4-Divisão"))
    se (! operação ||  operação >= 5) {
        alert("Valor inválido. Por favor digite um número válido")
        calculadora |()
    } mais { 
    num1 = Number(prompt('Digite o primeiro número: '))
    num2 = Number(prompt('Digite o segundo número: '))
    soma da função (soma= num1 + num2){
        alert('O resultado da soma é: ${soma}')
    }
    função subtracao(subtracao = num1 - num2 ){
        alert('O resultado da subtração é: ${subtracao}')
    }
    função multiplicacao(multiplicacao = num1 * num2 ){
        alert('O resultado da multiplicação é: ${multiplicacao}')

    }
    função divisao(divisao = num1 / num2){
        alert('O resultado da divisão é: ${divisao}')
        
    }
    if (operação == 1) {
        soma()
        newOperação()
    } 
    else if (operação == 2){
        subtracao()
        newOperação()
    }
    else if (operação == 3){
        multiplicação()
        newOperação()
    }
    else if (operação == 4){
        divisao()
        newOperação()
    }

}
função newOperação (opcao){
   opcao = prompt("Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não")
    if (opcao == 1) {
        calculadora |()
    }
    else if (opcao == 2){
        alert('Até breve...')
    } 
}
}

calculadora |()