SkillMatch JS
Simulador de Compatibilidade de Curriculo — Vaga Front-End Junior

Sobre o projeto
O SkillMatch JS e um sistema desenvolvido em JavaScript puro que compara as habilidades de uma candidata com os requisitos de vagas de Front-End Junior.
O sistema analisa:

-Quais habilidades a candidata possui
-Quais habilidades cada vaga exige
-Quais habilidades estao faltando
-O percentual de compatibilidade com cada vaga
-Qual vaga tem maior compatibilidade
-Qual recomendacao de estudo deve ser dada

Conceitos de JavaScript utilizados

-Arrays e Objetos
Os dados do candidato e das vagas sao organizados em objetos e arrays.

-Arrow Functions
Funcoes escritas de forma moderna com =>

-Metodos de Array

filter() — filtra os requisitos que a candidata possui ou nao possui
map() — percorre todas as vagas e gera os resultados
reduce() — encontra a vaga com maior compatibilidade
includes() — verifica se uma habilidade esta na lista

-Classes e Heranca
A classe Vaga e o molde base. A classe VagaFrontEnd herda tudo dela e adiciona o campo nivel.

-if/else
Define a sugestao de estudos com base nas habilidades que estao faltando.

-Closure
A funcao criarAnalisador recebe a candidata e retorna outra funcao que ja a lembra, sem precisar receber esse dado novamente.

-Promise
Simula uma busca assincrona de vagas, como se viessem de um servidor real.

-Async/Await
Aguarda a Promise resolver antes de continuar a execucao do codigo.

-Laco for...of
Percorre os resultados e exibe cada vaga formatada no terminal.
