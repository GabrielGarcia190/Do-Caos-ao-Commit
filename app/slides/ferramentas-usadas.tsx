import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Ferramentas Usadas",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Ferramentas Usadas
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        O que foi usado para criar esta apresentação
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-orange-500 flex items-center gap-4">
                            <img src="/Imagens/htmlIcon.png" alt="Ícone HTML"
                                className="w-10 h-10" />
                            <span><strong>HTML:</strong> Para a estrutura básica
                                dos slides.</span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-400 flex items-center gap-4">
                            <img src="/Imagens/tailwindIcon.jpg"
                                alt="Ícone Tailwind CSS" className="w-10 h-10" />
                            <span><strong>Tailwind CSS:</strong> Para toda a
                                estilização e layout.</span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-yellow-400 flex items-center gap-4">
                            <img src="/Imagens/javascriptIcon.png"
                                alt="Ícone JavaScript" className="w-10 h-10" />
                            <span><strong>JavaScript:</strong> Para a navegação
                                e interação dos slides.</span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-purple-400 flex items-center gap-4">
                            <img src="/Imagens/GeiminiIcon.webp"
                                alt="Ícone Gemini" className="w-10 h-10" />
                            <span><strong>Assistente de IA (Gemini):</strong>
                                Para gerar e ajustar o conteúdo dos
                                slides.</span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
