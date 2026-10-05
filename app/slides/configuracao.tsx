import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Configuração Inicial",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-4 text-gray-100 mb-6">
                    Primeiros Passos (Configuração)
                </h2>
                <h3 className="text-2xl font-light mb-8 text-orange-400">
                    Antes de começar a usar o Git
                </h3>
                <ul className="text-3xl space-y-6 list-none pl-0">
                    <li
                        className="p-6 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-orange-600 flex flex-row items-center flex-nowrap gap-2">
                        <span className="icon-large">👤</span>
                        <p><span
                                className="font-bold text-orange-400"><code>git config --global user.name "Seu Nome"</code></span>
                            <br />
                            <span className="text-tech-light text-2xl">
                                Define seu nome nos commits
                            </span>
                        </p>
                    </li>
                    <li
                        className="p-6 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-orange-600 flex flex-row flex-nowrap items-center gap-3">
                        <span className="icon-large">📧</span>
                        <p><span
                                className="font-bold text-orange-400"><code>git config --global user.email "seu@email.com"</code></span>
                            <br />
                            <span className="text-tech-light text-2xl">
                                Define seu email nos commits
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
    );
  },
};

export default slide;
