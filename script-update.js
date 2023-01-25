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


const buscarTurma = () => {
    let inputTurma = document.getElementById("search-input")
    
    const turmaEscolhida = turmas.filter((cadaTurma) => 
        cadaTurma.nomeTurma.toLowerCase().startsWith(inputTurma.value.toLowerCase())
    )
    inputTurma.value = ""
    turmaEscolhida.length > 0 ? gerarCard(turmaEscolhida) : gerarCard(turmas);
}



const gerarCard = (turmaCard) => {
    let newDiv = document.getElementById("container-cards-team")
   
    const templateCards = turmaCard.map((turma) =>
     `
     <div class="card-team">
       <h4 class="card-team-h4">${turma.nomeTurma}</h4>
       <ul>
           <li class="card-team-li"><b>Curso:</b> ${turma.curso}</li>
           <li class="card-team-li"><b>Início:</b> ${turma.inicio}</li>
           <li class="card-team-li"><b>Término:</b> ${turma.termino}</li>
           <li class="card-team-li"><b>Número de Alunos:</b> ${turma.numeroDeAlunos}</li>
           <li class="card-team-li"><b>Período:</b> ${turma.periodo}</li>
           <li class="card-team-li"><b>Concluído:</b> ${turma.concluida ? "Sim" : "Não"}</li>
       </ul>
     </div>
     `
    )
    newDiv.innerHTML = templateCards.join("")
}

const cursos = [
    {
        nomeCurso: "HTML e CSS",
        descricao: "Aprendar tudo sobre a linguagem de marcação HTML e nossa famosa linguagem de estilização CSS",
        duracao: "1 mês",
        valor: 500.00
    },
    {
        nomeCurso: "JavaScript",
        descricao: "Aprenda tudo sobre o famosinho JavaScript",
        duracao: "2 meses",
        valor: 900.00
    },
    {
        nomeCurso: "APIsRest",
        descricao: "Aprenda tudo sobre APIsRest",
        duracao: "6 meses",
        valor: 2000.00
    }
];


/* const buscarCurso = () => {
    
    let inputCurso = document.getElementById("course") 
    inputCurso = inputCurso.value.trim()
    console.log(inputCurso)

    
    const resultCurso = cursos.filter((curso) => 
        curso.nomeCurso.toLowerCase().includes(inputCurso.toLowerCase())
    )
    console.log(resultCurso)
    inputCurso.value = ""
} */

const carrinhoCursos = [];

const buscarCurso = (inputCurso) => {
        
    //nomecurso = nomecurso.toLowerCase().trim()
    const result = cursos.find(el => el.nomeCurso.toLowerCase().includes(inputCurso))
    if (typeof result == "underfined") modal('Atenção','Curso não encontrado!')

    return result
}

const adicionarCarrinhoCursos = () => {

    let inputCurso = document.getElementById("course") 
    inputCurso = inputCurso.value.trim().toLowerCase()
    if (!inputCurso) return

    const selecionarCurso = buscarCurso(inputCurso)

    if (!selecionarCurso) {//não executa a próxima linha se o curso escrito for incompativel com os cadastrados
        return
    } 

    if (carrinhoCursos.includes(selecionarCurso.valor)) {//garante que o curso já não tenha sido incluido no carrinho!
        return
    }

    carrinhoCursos.push(selecionarCurso.valor)
    document.getElementById("curso-selecionado").innerHTML += selecionarCurso.nomeCurso +`<p></p>`
    
    document.getElementById("course").value = ""
}

const parcelarCurso = () => {
    let valorTotal = 0;
    let desconto = 0;
    let valorParcelas = 0;
    let nParcelas = +document.getElementById("nParcel").value;

    if (nParcelas <= 0) {
        return
    }

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
    
    valorTotal = carrinhoCursos.reduce((acc, vAtual) => acc + vAtual, 0)

    if (nParcelas >= 1 && nParcelas <= 2) {
        desconto += 0.2
        valorTotal -= (valorTotal * desconto)
        valorParcelas = (valorTotal / nParcelas).toFixed(2)

        document.getElementById("resultado").innerHTML = `O valor do pagamento é de R$ ${valorTotal} com ${(desconto * 100).toFixed()}% de desconto, parcelado em ${nParcelas}x de R$ ${valorParcelas}`

    } else if (desconto === 0) {
        valorTotal -= (valorTotal * desconto)
        valorParcelas = (valorTotal / nParcelas).toFixed(2)

        document.getElementById("resultado").innerHTML =`O valor do pagamento é de R$ ${valorTotal}, parcelado em ${nParcelas}x de R$ ${valorParcelas}`

    } else {
        valorTotal -= (valorTotal * desconto)
        valorParcelas = (valorTotal / nParcelas).toFixed(2)

        document.getElementById("resultado").innerHTML =`O valor do pagamento é de R$ ${valorTotal} com ${(desconto * 100).toFixed()}% de desconto, parcelado em ${nParcelas}x de R$ ${valorParcelas}`
    }
    
    document.getElementById("nParcel").value = ""
};


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

const buscarEstudante = (nomeEstudante) => {
    
    const estudanteFilter = estudantes.filter((item) => 
        item.nomeEstudante.toLowerCase().includes(nomeEstudante.toLowerCase())
    )

    if (estudanteFilter.length < 1) {
        return `Estudante Não Encontrado`
    } 
    return estudanteFilter
};


const relStudent = (event) => {

    event.preventDefault(event)
    
    let alunoEscolhido = document.getElementById("rel-name").value.toLowerCase()
    console.log(alunoEscolhido)

    if (!alunoEscolhido) return
    
    const studentRecord = buscarEstudante(alunoEscolhido)
    console.log(studentRecord)

        document.getElementById("report-ul").innerHTML =
`         <li class="financial-text">Aluno: ${studentRecord[0].nomeEstudante}</li>
          <li class="financial-text">Turma: ${studentRecord[0].turma}</li>
          <li class="financial-text">Curso: ${studentRecord[0].curso}</li>
          <li class="financial-text">Valor total: ${studentRecord[0].valor}</li>
          <li class="financial-text">Valor parcela: ${studentRecord[0].parcelas}</li>
          <li class="financial-text">Nº parcelas: ${studentRecord[0].nParcelas}</li>
          `   
    document.getElementById("rel-name").value = ""
}

const matricular = () => {

    let nome = document.getElementById("name").value.toLowerCase()
    let curso = document.getElementById("course-matriculate").value.toLowerCase()
    let turma = document.getElementById("class-matriculate").value.toLowerCase()
    let nParcelas = +document.getElementById("nParcel-matriculate").value

    if(!nome || !curso || !turma || !nParcelas) return alert("Insira dados válidos!")

    let objCurso = buscarCurso(curso)
    let valorCurso = objCurso.valor
    curso = objCurso.nomeCurso
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

    document.getElementById("report").innerHTML =
        ` 
            <div id="report-div-title">
                <h4 class="matriculate-title">Aluno Matriculado</h4>
                <img id="report-div-img" src="./midias/Vector-5.png" alt="img">
            </div>

            <ul id="report-ul">
                <li class="report-li">Aluno Matriculado</li>
                <li class="report-li">Nome: ${nome} </li>
                <li class="report-li">Curso: ${curso} </li>
                <li class="report-li">Turma: ${turma} </li>
            </ul>

        `
    console.log(document.getElementById("report").innerHTML)
    document.getElementById("name").value = ""
    document.getElementById("course-matriculate").value = ""
    document.getElementById("class-matriculate").value = ""
    document.getElementById("nParcel-matriculate").value = ""
}

