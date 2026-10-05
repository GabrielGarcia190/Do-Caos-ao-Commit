import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "O que é Controle de Versão?",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        O que é Controle de Versão?
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Por que ele é tão importante?
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row items-center flex-nowrap gap-2">
                            <span className="icon-large text-yellow-400">📜</span>
                            <span className="text-gray-100">
                                É um sistema que <span
                                    className="text-sky-400 font-semibold">registra
                                    todas as mudanças</span> feitas em um
                                projeto ao longo do tempo.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row flex-nowrap items-center gap-3">
                            <span className="icon-large text-red-400">⏳</span>
                            <span>
                                Permite <strong>voltar a versões
                                    anteriores</strong>, comparar alterações e
                                saber quem fez o quê.
                            </span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row flex-nowrap items-center gap-3">
                            <span className="icon-large text-green-400">🚨</span>
                            <span>
                                Sem ele, um arquivo <strong>sobrescrito ou
                                    perdido</strong> pode causar grandes
                                problemas, principalmente em equipe.
                            </span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row flex-nowrap items-center gap-3">
                            <span className="icon-large text-green-400">⏪</span>
                            <span>
                                Com o Git, é só voltar à versão anterior – como
                                um <strong>"Ctrl+Z"</strong> gigante para todo o
                                projeto.
                            </span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
