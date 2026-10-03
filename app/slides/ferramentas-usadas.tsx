import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        Ferramentas Usadas
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        O que foi usado para criar esta apresentação
                    </h3>
                    <ul class="text-3xl space-y-6 list-none pl-0">
                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-orange-500 flex items-center gap-4">
                            <img src="/Imagens/htmlIcon.png" alt="Ícone HTML"
                                class="w-10 h-10">
                            <span><strong>HTML:</strong> Para a estrutura básica
                                dos slides.</span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-400 flex items-center gap-4">
                            <img src="/Imagens/tailwindIcon.jpg"
                                alt="Ícone Tailwind CSS" class="w-10 h-10">
                            <span><strong>Tailwind CSS:</strong> Para toda a
                                estilização e layout.</span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-yellow-400 flex items-center gap-4">
                            <img src="/Imagens/javascriptIcon.png"
                                alt="Ícone JavaScript" class="w-10 h-10">
                            <span><strong>JavaScript:</strong> Para a navegação
                                e interação dos slides.</span>
                        </li>

                        <li
                            class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-purple-400 flex items-center gap-4">
                            <img src="/Imagens/GeiminiIcon.webp"
                                alt="Ícone Gemini" class="w-10 h-10">
                            <span><strong>Assistente de IA (Gemini):</strong>
                                Para gerar e ajustar o conteúdo dos
                                slides.</span>
                        </li>
                    </ul>
                </div>
`;

export const title = "Ferramentas Usadas";

export default function Slide48() {
  return <SlideMarkup markup={markup} />;
}
