import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        O que é uma Branch (Ramificação)?
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Trabalhando em universos paralelos
                    </h3>
                    <ul class="text-3xl space-y-6 list-none pl-0">
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span class="icon-large">🌳</span>
                            <span class="flex-1">
                                Uma <span
                                    class="font-bold text-green-400">branch</span>
                                é uma <strong>linha de desenvolvimento
                                    independente</strong>.
                            </span>
                        </li>
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span class="icon-large">🛡️</span>
                            <span class="flex-1">
                                Permite criar novas funcionalidades, corrigir
                                bugs ou experimentar <strong>sem afetar a versão
                                    principal</strong> (a branch 'main').
                            </span>
                        </li>
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span class="icon-large">🚀</span>
                            <span class="flex-1">
                                É a base do trabalho em equipe: cada pessoa pode
                                trabalhar na sua própria branch.
                            </span>
                        </li>
                    </ul>
                </div>
`;

export const title = "O que é uma Branch (Ramificação)?";

export default function Slide16() {
  return <SlideMarkup markup={markup} />;
}
