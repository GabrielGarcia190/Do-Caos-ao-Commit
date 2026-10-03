import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        Padronização de Commits
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-green-400">
                        A Estrutura que Organiza o Histórico
                    </h3>
                    <ul class="text-3xl space-y-6 list-none pl-0">
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-center gap-3">
                            <span class="icon-large text-white">📝</span>
                            <span>
                                <strong>O Padrão:</strong> Utiliza o
                                <strong>Conventional Commits</strong>.
                                Formato:
                                <code>Tipo(Escopo): Objetivo</code>
                                (Ex:
                                <code>feat(auth): add login button</code>).
                            </span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-center gap-3">
                            <span class="icon-large text-white">🛠️</span>
                            <span>
                                <strong>Principais Tipos:</strong>
                                <strong>feat</strong>
                                (nova funcionalidade),
                                <strong>fix</strong>
                                (correção de bug),
                                <strong>docs</strong>
                                (documentação),
                                <strong>chore</strong>
                                (tarefas de rotina).
                            </span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-center gap-3">
                            <span class="icon-large text-white">✨</span>
                            <span>
                                <strong>O Benefício:</strong>
                                Facilita a
                                <strong>leitura do histórico</strong>,
                                permite a
                                <strong>geração automática de
                                    Changelogs</strong>
                                e é a base para o
                                **Semantic Versioning** (usado pelo Semantic
                                Release).
                            </span>
                        </li>
                    </ul>
                </div>
`;

export const title = "Padronização de Commits";

export default function Slide15() {
  return <SlideMarkup markup={markup} />;
}
