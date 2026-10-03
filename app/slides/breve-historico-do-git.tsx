import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        Breve Histórico do Git
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Criado por necessidade, para o caos do Linux
                    </h3>
                    <ul class="text-3xl space-y-6 list-none pl-0">
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-yellow-600 flex items-center gap-3">
                            <span class="icon-large text-white">🧠</span>
                            <span>
                                <strong>O Criador:</strong> Linus Torvalds (o
                                mesmo criador do Linux), em
                                <strong>2005</strong>.
                            </span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-yellow-600 flex items-center gap-3">
                            <span class="icon-large text-white">💥</span>
                            <span>
                                <strong>A Motivação:</strong> O kernel Linux
                                precisava de um sistema
                                <strong>rápido, seguro e distribuído</strong>.
                                Ferramentas anteriores
                                eram lentas ou centralizadas.
                            </span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-yellow-600 flex items-center gap-3">
                            <span class="icon-large text-white">🎯</span>
                            <span>
                                <strong>Os Objetivos:</strong> 1. Ser rápido, 2.
                                Ser distribuído (cada dev tem
                                uma cópia completa), 3. Garantir a integridade
                                dos dados.
                            </span>
                        </li>
                    </ul>
                </div>
`;

export const title = "Breve Histórico do Git";

export default function Slide04() {
  return <SlideMarkup markup={markup} />;
}
