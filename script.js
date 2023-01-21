//================== PROJETO 2 - WEB ======================

//criação dos 3 cursos e suas propriedades
const cursos = [
    {
        nomeCurso: "HTML e CSS",
        descricao: "",
        duracao: "1 mês",
        valor: 500.00
    },
    {
        nomeCurso: "JavaScript",
        descricao: "",
        duracao: "2 meses",
        valor: 900.00
    },
    {
        nomeCurso: "APIsRest",
        descricao: "",
        duracao: "6 meses",
        valor: 2000.00
    }
];

//=======================================================================

//Criação das 08 turmas com suas propriedades
const turmas = [
    {
        nomeTurma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false
    },
    {
        nomeTurma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        nomeTurma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        nomeTurma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "Integral",
        concluida: false
    },
    {
        nomeTurma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        nomeTurma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true
    },
    {
        nomeTurma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        nomeTurma: "Burnel",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false
    }
];

//=======================================================================

//Criação dos estudantes com suas propriedades
const estudantes = [
    {
        nomeEstudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900.00,
        nParcelas: 9,
        desconto: false,
        parcelas: 100.00
    },
    {
        nomeEstudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000.00,
        nParcelas: 4,
        desconto: false,
        parcelas: 500.00
    },
    {
        nomeEstudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500.00,
        nParcelas: 1,
        desconto: true,
        parcelas: 400
    }
];

//=======================================================================
//declarando o array carrinhoCursos zerado
const carrinhoCursos = [];

//=======================================================================
//criando a função buscarCurso

const buscarCurso = (nomeCurso) => {
    const resultCurso = cursos.find((item) => item.nomeCurso.toLowerCase() === nomeCurso.toLowerCase())
    return resultCurso
}
/*  
console.log(buscarCurso("JavaSCRIPT"))
console.log(buscarCurso("HTmL e css"))
console.log(buscarCurso("APIsRest"))
console.log(buscarCurso("JavaScriptq"))
*/
//=======================================================================
//criando a função adicionarCarrinhoCursos para incrementar o carrinhoCursos com o valor dos cursos selecionados usando a função buscarCursos como callback

const adicionarCarrinhoCursos = (nomeCurso) => {
    const selecionarCurso = buscarCurso(nomeCurso)

    if (!selecionarCurso) {//não executa a próxima linha se o curso escrito for incompativel com os cadastrados
        return
    } 

    if (carrinhoCursos.includes(selecionarCurso.valor)) {//garante que o curso já não tenha sido incluido no carrinho!
        return
    }

    carrinhoCursos.push(selecionarCurso.valor)
    console.log(carrinhoCursos)
}

/* adicionarCarrinhoCursos("hjhd")
adicionarCarrinhoCursos("JavaScript")
adicionarCarrinhoCursos("APIsRest")
adicionarCarrinhoCursos("HTML e CSS")
adicionarCarrinhoCursos("HTML e CSS")
 */
//=======================================================================
//criando a função parcelarCurso

const parcelarCurso = (nParcelas, carrinhoCursos) => {
    let valorTotal = 0;
    let desconto = 0;
    let valorParcelas = 0;

    if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto += 0.15;
                break;

            case 2:
                desconto += 0.10;
                break;
        };
    };

    //calcula o valorTotal usando o reduce para percorrer o array carrinhoCursos e soma os valores através da callback
    valorTotal = carrinhoCursos.reduce((acc, vAtual) => acc + vAtual, 0)

    /* for (soma of carrinhoCursos) {//calcular valorTotal com for of 
        valorTotal += soma           //percorrendo o array carrinhoCursos
    } */                            // e fazendo o somatório

    if (nParcelas >= 1 && nParcelas <= 2) {
        desconto += 0.2
        valorTotal -= (valorTotal * desconto)
        valorParcelas = (valorTotal / nParcelas).toFixed(2)

        return `O valor do pagamento é de R$ ${valorTotal} com ${(desconto * 100).toFixed()}% de desconto, parcelado em ${nParcelas}x de R$ ${valorParcelas}`

    } else if (desconto === 0) {
        valorTotal -= (valorTotal * desconto)
        valorParcelas = (valorTotal / nParcelas).toFixed(2)

        return `O valor do pagamento é de R$ ${valorTotal}, parcelado em ${nParcelas}x de R$ ${valorParcelas}`

    } else {//descontos de 10% ou 15% - mais de 2x e a partir de 2 cursos
        valorTotal -= (valorTotal * desconto)
        valorParcelas = (valorTotal / nParcelas).toFixed(2)

        return `O valor do pagamento é de R$ ${valorTotal} com ${(desconto * 100).toFixed()}% de desconto, parcelado em ${nParcelas}x de R$ ${valorParcelas}`
    }
};
//console.log(parcelarCurso(2, carrinhoCursos))

//=======================================================================
//criar função buscarTurma


const buscarTurma = () => {
    let inputTurma = document.getElementById("search-input")
    
    const resultTurma = turmas.filter((item) => {
        return item.nomeTurma.toLowerCase().startsWith(inputTurma.value.toLowerCase()) 
    })

    inputTurma.value = ""

    return resultTurma.length > 0 ? gerarCard(resultTurma) : gerarCard(turmas)
}


//criar função gerarCard

const gerarCard = (turmasBuscadas) => {
    const templateTurmas = turmasBuscadas.map((cadaTurmaBuscada) => 
            `
            <div class="card-team">
                <h4 class="card-team-h4">${cadaTurmaBuscada.nomeTurma}</h4>
                <ul>
                    <li class="card-team-li"><b>Curso:</b> ${cadaTurmaBuscada.curso}</li>
                    <li class="card-team-li"><b>Início:</b> ${cadaTurmaBuscada.inicio}</li>
                    <li class="card-team-li"><b>Término:</b> ${cadaTurmaBuscada.termino}</li>
                    <li class="card-team-li"><b>Número de Alunos:</b> ${cadaTurmaBuscada.numeroDeAlunos}</li>
                    <li class="card-team-li"><b>Período:</b> ${cadaTurmaBuscada.periodo}</li>
                    <li class="card-team-li"><b>Concluído:</b> ${cadaTurmaBuscada.concluida ? "Sim" : "Não"}</li>
                </ul>
            </div>
            `    
    )
    
    let addCards = document.getElementById("container-cards-team")        
    addCards.innerHTML = templateTurmas.join("");
}




























/* const buscarTurma = (selecionarTurma) => {
    
    const resultTurma = turmas.filter((item) => {
       return item.nomeTurma.toLowerCase() === selecionarTurma.toLowerCase()
    })
    
    resultTurma.length > 0 ? console.log(resultTurma[0]) : console.log("Turma não encontrada!")    
} */
//buscarTurma("BURNEL")
//buscarTurma("BURNEL")
//buscarTurma("Clard")

//=================================================================
//criando função matricular

const matricular = (nome, curso, turma, nParcelas) => {
    let objCurso = buscarCurso(curso)
    let valorCurso = objCurso.valor
    let desconto = false
    let valorDaParcela = (valorCurso / nParcelas).toFixed(2)

    if (nParcelas >= 1 && nParcelas <= 2) {
        desconto = true
    } 

    const newStudent = {

        nomeEstudante: nome,
        turma: turma,
        curso: curso,
        valor: valorCurso,
        nParcelas: nParcelas,
        desconto: desconto,
        parcelas: valorDaParcela
    };

    estudantes.push(newStudent);

    console.log(estudantes)
    console.log(`Aluno Matriculado \nNome: ${nome} \nCurso: ${curso} \nTurma: ${turma}`)
}
//matricular("Flávia", "HTML e CSS", "Ozemela", 5)


//============================================================================================
//criando a função buscarEstudante com o filter e includes
const buscarEstudante = (nomeEstudante) => {
    
    const estudanteFilter = estudantes.filter((item) => 
        item.nomeEstudante.toLowerCase().includes(nomeEstudante.toLowerCase())
    )

    if (estudanteFilter.length < 1) {
        return `Estudante Não Encontrado`
    } 
    return estudanteFilter
};
/* console.log(buscarEstudante("HAL"))
console.log(buscarEstudante("Halle Berry"))
console.log(buscarEstudante("koa"))
console.log(buscarEstudante("las"))
console.log(buscarEstudante("Chr")) */

//=======================================================================
//criar função buscarEstudante com for of e includes
/* const buscarEstudante = (nomeEstudante) => {
    let resultEstudante

    for (estudante of estudantes) {
        if (estudante.nomeEstudante.toLowerCase().includes(nomeEstudante.toLowerCase())) {
        resultEstudante = estudante
    }
    }
    if (resultEstudante) {
        return resultEstudante
    } else {
        return `Estudante não encontrado!`
    }
}
 *//* console.log(buscarEstudante("HAL"))
console.log(buscarEstudante("Halle Berry"))
console.log(buscarEstudante("koa"))
console.log(buscarEstudante("las"))
console.log(buscarEstudante("Chr")) */

//=======================================================================
//criando a função buscarEstudante com o startsWith
/* const buscarEstudante = (selecionarEstudante) => {

    for (let index in estudantes) {

        if (estudantes[index].nomeEstudante.toLowerCase().startsWith(selecionarEstudante.toLowerCase())) {
            return estudantes[index];
        }
    } return `Aluno Não Encontrado!`
};
console.log(buscarEstudante("Hal"))
console.log(buscarEstudante("jisok"))
console.log(buscarEstudante("LAs")) */

//=======================================================================
//criar a função relatorioEstudante

const relatorioEstudante = (nomeEstudante) => {
    const resultEstudante = buscarEstudante(nomeEstudante)

    if (typeof resultEstudante !== "object") {
        return ""//se o aluno não for encontrado não retorna nada!
    }

    return `RELATÓRIO ALUNO \nAluno: ${resultEstudante[0].nomeEstudante} \nTurma: ${resultEstudante[0].turma} \nCurso: ${resultEstudante[0].curso} \nValor Total: ${resultEstudante[0].valor} \nValor Parcela: ${resultEstudante[0].parcelas} \nNº Parcelas: ${resultEstudante[0].nParcelas}`

}

/* console.log(relatorioEstudante("haL"))
console.log(relatorioEstudante("hals"))
console.log(relatorioEstudante("cHR"))
console.log(relatorioEstudante("LA"))
console.log(relatorioEstudante("FLÁ")) */


//============================================================================================

