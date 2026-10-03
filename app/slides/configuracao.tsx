import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
 <div class="max-w-4xl w-full">
                <h2 class="text-5xl font-bold mb-4 text-gray-100 mb-6">
                    Primeiros Passos (Configuração)
                </h2>
                <h3 class="text-2xl font-light mb-8 text-orange-400">
                    Antes de começar a usar o Git
                </h3>
                <ul class="text-3xl space-y-6 list-none pl-0">
                    <li
                        class="p-6 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-orange-600 flex flex-row items-center flex-nowrap gap-2">
                        <span class="icon-large">👤</span>
                        <p><span
                                class="font-bold text-orange-400"><code>git config --global user.name "Seu Nome"</code></span>
                            <br />
                            <span class="text-tech-light text-2xl">
                                Define seu nome nos commits
                            </span>
                        </p>
                    </li>
                    <li
                        class="p-6 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-orange-600 flex flex-row flex-nowrap items-center gap-3">
                        <span class="icon-large">📧</span>
                        <p><span
                                class="font-bold text-orange-400"><code>git config --global user.email "seu@email.com"</code></span>
                            <br />
                            <span class="text-tech-light text-2xl">
                                Define seu email nos commits
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
`;

export const title = "Configuração Inicial";

export default function Slide23() {
  return <SlideMarkup markup={markup} />;
}