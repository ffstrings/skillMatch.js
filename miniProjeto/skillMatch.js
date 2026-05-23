const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};
const vagas = [

  {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 2800,
    modalidade: "Remoto"
  },

 
  {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido"
  },
 {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
    salario: 3000,
    modalidade: "Presencial"
  }
];

const calcularCompatibilidade = (vaga) => {
  const matches = vaga.requisitos.filter(req =>
    candidato.habilidades.includes(req)
  );
  return (matches.length / vaga.requisitos.length) * 100;
};

const resultados = vagas.map(vaga => {
  const compatibilidade = calcularCompatibilidade(vaga);
  const habilidadesFaltando = vaga.requisitos.filter(req => !candidato.habilidades.includes(req));
  const sugestaoEstudos = habilidadesFaltando.length > 0
    ? `Para aumentar sua compatibilidade, considere estudar: ${habilidadesFaltando.join(', ')}.`
    : "Você atende a todos os requisitos!";

  return {
    vaga: vaga.cargo,
    empresa: vaga.empresa,
    compatibilidade: compatibilidade,
    habilidadesFaltando: habilidadesFaltando,
    sugestaoEstudos: sugestaoEstudos
  };
});

console.log(resultados);

//Classe criada
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }

//Herança criada  
}
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
    new Vaga(empresa, cargo, requisitos, salario, modalidade);
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}
