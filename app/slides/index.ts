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
// import Slide21 from "./ferramentas-usadas";
// import Slide22 from "./obrigado";
// import Slide23 from "./apresentado-por";

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
];

export default slides;
