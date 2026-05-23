
const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};




// Classe pai: define o molde base de qualquer vaga
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa    = empresa;
    this.cargo      = cargo;
    this.requisitos = requisitos;
    this.salario    = salario;
    this.modalidade = modalidade;
  }

  // Método que exibe um resumo da vaga
  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

// Classe filha: herda tudo de Vaga e adiciona o campo "nivel"
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    // super() chama o constructor da classe pai (Vaga)
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  // Método exclusivo da classe filha
  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}



//INSTANCIANDO AS VAGAS — criando objetos a partir da classe


const vaga1 = new VagaFrontEnd("TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação"], 2800, "Remoto", "júnior");
const vaga2 = new VagaFrontEnd("CodeLab", "Estágio Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Híbrido", "júnior");
const vaga3 = new VagaFrontEnd("WebSolutions", "Programador JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", "júnior");

// Array que reúne todas as vagas
const vagas = [vaga1, vaga2, vaga3];


//CLOSURE — função que "lembra" o candidato do escopo externo


// criarAnalisador é uma função que recebe um candidato
// e retorna outra função que já "lembra" quem é esse candidato.
// Isso é uma closure: a função de dentro acessa a variável de fora.
const criarAnalisador = (candidato) => {
  return (vaga) => {
    const matches = vaga.requisitos.filter(req =>
      candidato.habilidades.includes(req)
    );
    return (matches.length / vaga.requisitos.length) * 100;
  };
};

// Criamos o analisador passando a Ana — ele vai "lembrar" dela
const calcularCompatibilidade = criarAnalisador(candidato);



// PROMISE — simula a busca assíncrona das vagas (como uma API)

// Uma Promise representa algo que vai acontecer no futuro.
// Aqui simulamos um tempo de espera de 1 segundo, como se
// estivéssemos buscando as vagas em um servidor real.
const buscarVagas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas); // entrega as vagas após 1 segundo
    }, 1000);
  });
};



// ASYNC/AWAIT — executa a análise depois que as vagas chegarem


// async/await é uma forma mais legível de usar Promises.
// O "await" pausa a função até a Promise terminar.
const executarAnalise = async () => {

  console.log(`Buscando vagas para ${candidato.nome}...`);

  // Aguarda as vagas chegarem antes de continuar
  const vagasEncontradas = await buscarVagas();

  // map percorre cada vaga e gera um resultado com a análise
  const resultados = vagasEncontradas.map(vaga => {

    const compatibilidade = calcularCompatibilidade(vaga);

    // filter invertido: pega o que a Ana NÃO tem
    const habilidadesFaltando = vaga.requisitos.filter(req =>
      !candidato.habilidades.includes(req)
    );

    // if/else: define a sugestão de estudos
    let sugestaoEstudos;
    if (habilidadesFaltando.length > 0) {
      sugestaoEstudos = `Para aumentar sua compatibilidade, considere estudar: ${habilidadesFaltando.join(", ")}.`;
    } else {
      sugestaoEstudos = "Você atende a todos os requisitos!";
    }

    return {
      vaga: vaga.cargo,
      empresa: vaga.empresa,
      nivel: vaga.nivel,
      compatibilidade: compatibilidade,
      habilidadesFaltando: habilidadesFaltando,
      sugestaoEstudos: sugestaoEstudos
    };
  });

  //LAÇO FOR...OF — exibe cada resultado formatado no console
 

  console.log("\n===== RESULTADO DA ANÁLISE =====\n");

  for (const resultado of resultados) {
    console.log(`Vaga:            ${resultado.vaga}`);
    console.log(`Empresa:         ${resultado.empresa}`);
    console.log(`Nível:           ${resultado.nivel}`);
    console.log(`Compatibilidade: ${resultado.compatibilidade}%`);
    console.log(`Sugestão:        ${resultado.sugestaoEstudos}`);
    console.log("--------------------------------");
  }

  // Encontra a vaga com maior compatibilidade usando reduce
  const melhorVaga = resultados.reduce((melhor, atual) =>
    atual.compatibilidade > melhor.compatibilidade ? atual : melhor
  );

  console.log(`\nMelhor vaga para ${candidato.nome}: ${melhorVaga.vaga} (${melhorVaga.compatibilidade}%)`);
};

// Chama a função principal
executarAnalise();