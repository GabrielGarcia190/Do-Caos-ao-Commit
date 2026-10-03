import type { ComponentType } from "react";
import Slide01 from "./melhor-apresentacao-do-dia-do-caaos-ao-commit";
import Slide02 from "./o-que-e-controle-de-versao";
import Slide03 from "./o-que-e-versionamento-de-arquivos";
import Slide04 from "./breve-historico-do-git";
import Slide05 from "./linus-torvalds";
import Slide06 from "./diferenca-entre-git-e-github";
import Slide07 from "./diferenca-entre-git-e-github-2";
import Slide08 from "./vantagens-de-usar-git-e-github";
import Slide09 from "./fundamentos-o-que-e-um-repositorio-repo";
import Slide10 from "./diferenca-entre-git-e-github-3";
import Slide11 from "./ciclo-de-vida-dos-arquivos";
import Slide12 from "./principais-comandos-do-git-i";
import Slide13 from "./principais-comandos-do-git-ii";
import Slide14 from "./principais-comandos-do-git-iii";
import Slide15 from "./padronizacao-de-commits";
import Slide16 from "./o-que-e-uma-branch-ramificacao";
import Slide17 from "./exemplo-de-funcionamento-de-branches";
import Slide18 from "./o-que-e-um-pull-request-pr";
import Slide19 from "./merge-mesclagem-e-conflitos";
import Slide20 from "./principais-erros-no-git";
import Slide21 from "./git-ignore";
import Slide22 from "./vamos-pratica";
import Slide23 from "./configuracao";
import Slide24 from "./criando-projeto";
import Slide25 from "./criando-arquivo";
import Slide26 from "./abrindo-terminal";
import Slide27 from "./iniciando-git";
import Slide28 from "./adicionando-arquivos-git";
import Slide29 from "./fazendo-commit";
import Slide30 from "./criando-repositorio-no-github";
import Slide31 from "./conectando-ao-remoto";
import Slide32 from "./enviando-para-o-github";
import Slide33 from "./trabalhando-com-branch";
import Slide34 from "./alterando-o-projeto";
import Slide35 from "./fazendo-commit-2";
import Slide36 from "./fazendo-commit-3";
import Slide37 from "./criando-um-pull-request";
import Slide38 from "./fazendo-o-merge";
import Slide39 from "./segunda-pratica";
import Slide40 from "./clonando-o-projeto";
import Slide41 from "./criando-sua-branch";
import Slide42 from "./alterando-o-projeto-2";
import Slide43 from "./salvando-alteracoes";
import Slide44 from "./criando-pull-request";
import Slide45 from "./conflito";
import Slide46 from "./resolvendo-o-conflito";
import Slide47 from "./fluxo-real-de-trabalho";
import Slide48 from "./ferramentas-usadas";
import Slide49 from "./obrigado";
import Slide50 from "./apresentado-por";

export type SlideDefinition = {
  title: string;
  component: ComponentType;
};

const slides: SlideDefinition[] = [
  { title: "Melhor apresentação do dia - Do caaos ao Commit", component: Slide01 },
  { title: "O que é Controle de Versão?", component: Slide02 },
  { title: "O que é Versionamento de Arquivos?", component: Slide03 },
  { title: "Breve Histórico do Git", component: Slide04 },
  { title: "Linus Torvalds", component: Slide05 },
  { title: "Diferença entre Git e GitHub", component: Slide06 },
  { title: "Diferença entre Git e GitHub", component: Slide07 },
  { title: "Vantagens de usar Git e GitHub", component: Slide08 },
  { title: "Fundamentos: O que é um Repositório (Repo)?", component: Slide09 },
  { title: "Diferença Entre Git e GitHub", component: Slide10 },
  { title: "Ciclo de Vida dos Arquivos", component: Slide11 },
  { title: "Principais Comandos do Git I", component: Slide12 },
  { title: "Principais Comandos do Git II", component: Slide13 },
  { title: "Principais Comandos do Git III", component: Slide14 },
  { title: "Padronização de Commits", component: Slide15 },
  { title: "O que é uma Branch (Ramificação)?", component: Slide16 },
  { title: "Exemplo de funcionamento de Branches", component: Slide17 },
  { title: "O que é um Pull Request (PR)?", component: Slide18 },
  { title: "Merge (Mesclagem) e Conflitos", component: Slide19 },
  { title: "Principais Erros no Git", component: Slide20 },
  { title: "O que é .gitignore?", component: Slide21 },
  { title: "Vamos para a prática", component: Slide22 },
  { title: "Configuração Inicial", component: Slide23 },
  { title: "Criando o projeto", component: Slide24 },
  { title: "Criando o arquivo", component: Slide25 },
  { title: "Abrindo o terminal", component: Slide26 },
  { title: "Iniciando o Git", component: Slide27 },
  { title: "Adicionando arquivos do Git", component: Slide28 },
  { title: "Fazendo commit", component: Slide29 },
  { title: "Criando repositório no GitHub", component: Slide30 },
  { title: "Conectando ao remoto", component: Slide31 },
  { title: "Enviando para o GitHub", component: Slide32 },
  { title: "Trabalhando com branch", component: Slide33 },
  { title: "Alterando o projeto", component: Slide34 },
  { title: "Fazendo commit", component: Slide35 },
  { title: "Fazendo commit", component: Slide36 },
  { title: "Criando um Pull Request", component: Slide37 },
  { title: "Fazendo o Merge", component: Slide38 },
  { title: "Segunda Prática", component: Slide39 },
  { title: "Clonando o projeto", component: Slide40 },
  { title: "Criando sua branch", component: Slide41 },
  { title: "Alterando o projeto", component: Slide42 },
  { title: "Salvando alterações", component: Slide43 },
  { title: "Criando Pull Request", component: Slide44 },
  { title: "Conflito", component: Slide45 },
  { title: "Resolvendo o conflito", component: Slide46 },
  { title: "Fluxo real de trabalho", component: Slide47 },
  { title: "Ferramentas Usadas", component: Slide48 },
  { title: "Obrigado!", component: Slide49 },
  { title: "Apresentado por", component: Slide50 },
];

export default slides;
