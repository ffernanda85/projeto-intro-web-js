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

let inputTurma = document.getElementById("search-input")
console.log(inputTurma.value)

const buscarTurma = () => {
    const turmaEscolhida = turmas.filter((cadaTurma) => 
        cadaTurma.nomeTurma.toLowerCase().startsWith(inputTurma.value.toLowerCase())
    )
    inputTurma.value = ""
    turmaEscolhida.length > 0 ? gerarCard(turmaEscolhida) : gerarCard(turmas);
}


let newDiv = document.getElementById("container-cards-team")

const gerarCard = (turmaCard) => {
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

