import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        O que é Controle de Versão?
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Por que ele é tão importante?
                    </h3>
                    <ul class="text-3xl space-y-6 list-none pl-0">
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row items-center flex-nowrap gap-2">
                            <span class="icon-large text-yellow-400">📜</span>
                            <span class="text-gray-100">
                                É um sistema que <span
                                    class="text-sky-400 font-semibold">registra
                                    todas as mudanças</span> feitas em um
                                projeto ao longo do tempo.
                            </span>
                        </li>
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row flex-nowrap items-center gap-3">
                            <span class="icon-large text-red-400">⏳</span>
                            <span>
                                Permite <strong>voltar a versões
                                    anteriores</strong>, comparar alterações e
                                saber quem fez o quê.
                            </span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row flex-nowrap items-center gap-3">
                            <span class="icon-large text-green-400">🚨</span>
                            <span>
                                Sem ele, um arquivo <strong>sobrescrito ou
                                    perdido</strong> pode causar grandes
                                problemas, principalmente em equipe.
                            </span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex flex-row flex-nowrap items-center gap-3">
                            <span class="icon-large text-green-400">⏪</span>
                            <span>
                                Com o Git, é só voltar à versão anterior – como
                                um <strong>"Ctrl+Z"</strong> gigante para todo o
                                projeto.
                            </span>
                        </li>
                    </ul>
                </div>
`;

export const title = "O que é Controle de Versão?";

export default function Slide02() {
  return <SlideMarkup markup={markup} />;
}
