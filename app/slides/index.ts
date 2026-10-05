import type { ISlide, ISlideDaApresentacao } from "./islide";
import capa from "./melhor-apresentacao-do-dia-do-caaos-ao-commit";
import oQueEControleDeVersao from "./o-que-e-controle-de-versao";
import oQueEVersionamentoDeArquivos from "./o-que-e-versionamento-de-arquivos";
import breveHistoricoDoGit from "./breve-historico-do-git";
import linusTorvalds from "./linus-torvalds";
import diferencaEntreGitEGithub from "./diferenca-entre-git-e-github";
import diferencaEntreGitEGithub2 from "./diferenca-entre-git-e-github-2";
import vantagensDeUsarGitEGithub from "./vantagens-de-usar-git-e-github";
import fundamentosOQueEUmRepositorio from "./fundamentos-o-que-e-um-repositorio-repo";
import diferencaEntreGitEGithub3 from "./diferenca-entre-git-e-github-3";
import cicloDeVidaDosArquivos from "./ciclo-de-vida-dos-arquivos";
import principaisComandosDoGitI from "./principais-comandos-do-git-i";
import principaisComandosDoGitII from "./principais-comandos-do-git-ii";
import principaisComandosDoGitIII from "./principais-comandos-do-git-iii";
import padronizacaoDeCommits from "./padronizacao-de-commits";
import oQueEUmaBranch from "./o-que-e-uma-branch-ramificacao";
import exemploDeFuncionamentoDeBranches from "./exemplo-de-funcionamento-de-branches";
import oQueEUmPullRequest from "./o-que-e-um-pull-request-pr";
import mergeMesclagemEConflitos from "./merge-mesclagem-e-conflitos";
import principaisErrosNoGit from "./principais-erros-no-git";
import gitIgnore from "./git-ignore";
import vamosPratica from "./vamos-pratica";
import configuracao from "./configuracao";
import fazendoFork from "./Fazendo-Fork";
import criandoProjeto from "./criando-projeto";
import criandoArquivo from "./criando-arquivo";
import iniciandoGit from "./iniciando-git";
import exemploDeJson from "./exemplo-de-json";
import adicionandoArquivosGit from "./adicionando-arquivos-git";
import fazendoCommit from "./fazendo-commit";
// import criandoRepositorioNoGithub from "./criando-repositorio-no-github";
// import conectandoAoRemoto from "./conectando-ao-remoto";
import enviandoParaOGithub from "./enviando-para-o-github";
// import trabalhandoComBranch from "./trabalhando-com-branch";
// import alterandoOProjeto from "./alterando-o-projeto";
// import fazendoCommit2 from "./fazendo-commit-2";
// import fazendoCommit3 from "./fazendo-commit-3";
import criandoUmPullRequest from "./criando-um-pull-request";
import fazendoOMerge from "./fazendo-o-merge";
import segundaPratica from "./segunda-pratica";
import clonandoOProjeto from "./clonando-o-projeto";
import criandoSuaBranch from "./criando-sua-branch";
import alterandoOProjeto2 from "./alterando-o-projeto-2";
import salvandoAlteracoes from "./salvando-alteracoes";
import criandoPullRequest from "./criando-pull-request";
import conflito from "./conflito";
import resolvendoOConflito from "./resolvendo-o-conflito";
import fluxoRealDeTrabalho from "./fluxo-real-de-trabalho";
import ferramentasUsadas from "./ferramentas-usadas";
import obrigado from "./obrigado";
import apresentadoPor from "./apresentado-por";

const ordem: ISlide[] = [
  capa,
  oQueEControleDeVersao,
  oQueEVersionamentoDeArquivos,
  breveHistoricoDoGit,
  linusTorvalds,
  diferencaEntreGitEGithub,
  diferencaEntreGitEGithub2,
  vantagensDeUsarGitEGithub,
  fundamentosOQueEUmRepositorio,
  diferencaEntreGitEGithub3,
  cicloDeVidaDosArquivos,
  principaisComandosDoGitI,
  principaisComandosDoGitII,
  principaisComandosDoGitIII,
  padronizacaoDeCommits,
  oQueEUmaBranch,
  exemploDeFuncionamentoDeBranches,
  oQueEUmPullRequest,
  mergeMesclagemEConflitos,
  principaisErrosNoGit,
  gitIgnore,
  vamosPratica,
  configuracao,
  fazendoFork,
  criandoProjeto,
  criandoArquivo,
  iniciandoGit,
  exemploDeJson,
  adicionandoArquivosGit,
  fazendoCommit,
  // criandoRepositorioNoGithub,
  // conectandoAoRemoto,
  enviandoParaOGithub,
  // trabalhandoComBranch,
  // alterandoOProjeto,
  // fazendoCommit2,
  // fazendoCommit3,
  criandoUmPullRequest,
  fazendoOMerge,
  segundaPratica,
  clonandoOProjeto,
  criandoSuaBranch,
  alterandoOProjeto2,
  salvandoAlteracoes,
  criandoPullRequest,
  conflito,
  resolvendoOConflito,
  fluxoRealDeTrabalho,
  ferramentasUsadas,
  obrigado,
  apresentadoPor,
];

const slides: ISlideDaApresentacao[] = ordem.map((slide, indice) => ({
  ...slide,
  numero: indice + 1,
}));

export default slides;
