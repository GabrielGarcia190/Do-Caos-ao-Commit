import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "O que é um Pull Request (PR)?",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        O que é um Pull Request (PR)?
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Pedindo para integrar suas mudanças
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-cyan-600 flex items-start gap-4">
                            <span className="icon-large">📬</span>
                            <span className="flex-1">
                                Um Pull Request (ou Merge Request) é um
                                <strong>pedido formal</strong> para "mesclar"
                                (merge) sua branch em outra (ex: 'feature-login'
                                na 'main').
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-cyan-600 flex items-start gap-4">
                            <span className="icon-large">👀</span>
                            <span className="flex-1">
                                É uma ferramenta do <strong>GitHub</strong> (não
                                do Git em si) que permite a <strong>revisão de
                                    código (Code Review)</strong>.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-cyan-600 flex items-start gap-4">
                            <span className="icon-large">💬</span>
                            <span className="flex-1">
                                A equipe pode discutir as mudanças, sugerir
                                melhorias e aprovar a integração.
                            </span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
