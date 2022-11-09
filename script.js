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