     import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
 <div class="max-w-4xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100">
                    O que é <code>.gitignore</code>?
                </h2>
                <ul class="text-3xl space-y-6 list-none pl-0">
                    <li
                        class="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex items-center gap-3">
                        <span class="icon-large text-white">📄</span>
                        <span>
                            Arquivo que define o que o Git deve ignorar
                        </span>
                    </li>
                    <li
                        class="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex items-center gap-3">
                        <span class="icon-large text-white">🚫</span>
                        <span>
                            Evita subir arquivos desnecessários
                        </span>
                    </li>
                    <li
                        class="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex items-center gap-3">
                        <span class="icon-large text-white">💡</span>
                        <span>
                            Exemplos:<br />
                            <ul class="text-2xl font-mono mt-2">
                                <li>node_modules</li>
                                <li>bin/</li>
                                <li>obj/</li>
                                <li>.env</li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </div>
`;

export const title = "O que é .gitignore?";

export default function Slide21() {
  return <SlideMarkup markup={markup} />;
}