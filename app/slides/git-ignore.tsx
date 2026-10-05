import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "O que é .gitignore?",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100">
                    O que é <code>.gitignore</code>?
                </h2>
                <ul className="text-3xl space-y-6 list-none pl-0">
                    <li
                        className="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex items-center gap-3">
                        <span className="icon-large text-white">📄</span>
                        <span>
                            Arquivo que define o que o Git deve ignorar
                        </span>
                    </li>
                    <li
                        className="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex items-center gap-3">
                        <span className="icon-large text-white">🚫</span>
                        <span>
                            Evita subir arquivos desnecessários
                        </span>
                    </li>
                    <li
                        className="p-5 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-blue-600 flex items-center gap-3">
                        <span className="icon-large text-white">💡</span>
                        <span>
                            Exemplos:<br />
                            <ul className="text-2xl font-mono mt-2">
                                <li>node_modules</li>
                                <li>bin/</li>
                                <li>obj/</li>
                                <li>.env</li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </div>
    );
  },
};

export default slide;
