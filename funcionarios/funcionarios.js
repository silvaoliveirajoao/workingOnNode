const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
 
//Mulher chinesa com menor salario
 
const getPessoaAdequada = pessoa => pessoa.pais === 'China' && pessoa.genero === 'F'
 
 
axios.get(url).then(response => {
 
    const funcionarios = response.data
    const mulheresChinesas = funcionarios.filter(getPessoaAdequada)
    const salarios = mulheresChinesas.map((mulherChinesa) => mulherChinesa.salario)
 
 
    const getMenorSalario = function (vetor) {
        let menorSalario = vetor[0]
 
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] < menorSalario) menorSalario = vetor[i]
        }
 
        return menorSalario
    }
 
    console.log(`O menor salário é: ${getMenorSalario(salarios)}`)
 
})