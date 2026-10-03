import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        Merge (Mesclagem) e Conflitos
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Juntando o trabalho... ou não.
                    </h3>
                    <div class="grid grid-cols-2 gap-6">
                        <div
                            class="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-purple-400">
                            <h4
                                class="text-3xl font-semibold mb-3 flex items-center"><span
                                    class="icon-large">🤝</span> Merge</h4>
                            <ul class="text-xl space-y-2 list-none pl-0">
                                <li><span class="text-green-400">»</span> É
                                    o ato de <strong>integrar as
                                        mudanças</strong> de uma branch em
                                    outra.</li>
                                <li><span class="text-green-400">»</span> O
                                    Git tenta juntar os históricos de forma
                                    automática.</li>
                                <li><span
                                        class="text-git-blue font-mono">&#96;git
                                        merge nome-da-branch&#96;</span></li>
                            </ul>
                        </div>
                        <div
                            class="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-red-400">
                            <h4
                                class="text-3xl font-semibold mb-3 flex items-center"><span
                                    class="icon-large">💥</span>
                                Conflito</h4>
                            <ul class="text-xl space-y-2 list-none pl-0">
                                <li><span class="text-red-400">»</span>
                                    Ocorre quando o Git <strong>não sabe
                                        qual mudança manter</strong>.</li>
                                <li><span class="text-red-400">»</span> Ex:
                                    Duas pessoas alteraram a <strong>mesma
                                        linha</strong> em arquivos
                                    diferentes.</li>
                                <li><span class="text-red-400">»</span> O
                                    Git para o processo e exige que o
                                    <strong>desenvolvedor resolva
                                        manualmente</strong>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
`;

export const title = "Merge (Mesclagem) e Conflitos";

export default function Slide19() {
  return <SlideMarkup markup={markup} />;
}
