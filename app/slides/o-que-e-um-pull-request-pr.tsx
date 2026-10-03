import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        O que é um Pull Request (PR)?
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Pedindo para integrar suas mudanças
                    </h3>
                    <ul class="text-3xl space-y-6 list-none pl-0">
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-cyan-600 flex items-start gap-4">
                            <span class="icon-large">📬</span>
                            <span class="flex-1">
                                Um Pull Request (ou Merge Request) é um
                                <strong>pedido formal</strong> para "mesclar"
                                (merge) sua branch em outra (ex: 'feature-login'
                                na 'main').
                            </span>
                        </li>
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-cyan-600 flex items-start gap-4">
                            <span class="icon-large">👀</span>
                            <span class="flex-1">
                                É uma ferramenta do <strong>GitHub</strong> (não
                                do Git em si) que permite a <strong>revisão de
                                    código (Code Review)</strong>.
                            </span>
                        </li>
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-cyan-600 flex items-start gap-4">
                            <span class="icon-large">💬</span>
                            <span class="flex-1">
                                A equipe pode discutir as mudanças, sugerir
                                melhorias e aprovar a integração.
                            </span>
                        </li>
                    </ul>
                </div>
`;

export const title = "O que é um Pull Request (PR)?";

export default function Slide18() {
  return <SlideMarkup markup={markup} />;
}
