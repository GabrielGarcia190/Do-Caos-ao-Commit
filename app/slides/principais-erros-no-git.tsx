import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
            <div class="max-w-4xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100">
                    Erros Comuns no Git
                </h2>
                <ul class="text-3xl space-y-6 list-none pl-0">
                    <li
                        class="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-red-600 flex items-center gap-3">
                        <span class="icon-large text-white">📝</span>
                        <span>
                            Commit com mensagem ruim ("teste", "ajuste")
                        </span>
                    </li>
                    <li
                        class="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-red-600 flex items-center gap-3">
                        <span class="icon-large text-white">🚫</span>
                        <span>
                            Trabalhar direto na <code>main</code> (sem usar branch)
                        </span>
                    </li>
                    <li
                        class="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-red-600 flex items-center gap-3">
                        <span class="icon-large text-white">🔒</span>
                        <span>
                            Comitar dados sensíveis (.env, senhas, tokens)
                        </span>
                    </li>
                </ul>
                <p class="text-xl mt-6 text-tech-light">
                    💡 Errar faz parte — Git é prática!
                </p>
            </div>
                </div>
`;

export const title = "Principais Erros no Git";

export default function Slide20() {
  return <SlideMarkup markup={markup} />;
}