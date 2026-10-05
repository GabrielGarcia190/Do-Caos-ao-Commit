import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Principais Erros no Git",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100">
                    Erros Comuns no Git
                </h2>
                <ul className="text-3xl space-y-6 list-none pl-0">
                    <li
                        className="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-red-600 flex items-center gap-3">
                        <span className="icon-large text-white">📝</span>
                        <span>
                            Commit com mensagem ruim ("teste", "ajuste")
                        </span>
                    </li>
                    <li
                        className="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-red-600 flex items-center gap-3">
                        <span className="icon-large text-white">🚫</span>
                        <span>
                            Trabalhar direto na <code>main</code> (sem usar branch)
                        </span>
                    </li>
                    <li
                        className="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-red-600 flex items-center gap-3">
                        <span className="icon-large text-white">🔒</span>
                        <span>
                            Comitar dados sensíveis (.env, senhas, tokens)
                        </span>
                    </li>
                </ul>
                <p className="text-xl mt-6 text-tech-light">
                    💡 Errar faz parte — Git é prática!
                </p>
            </div>
                </div>
    );
  },
};

export default slide;
