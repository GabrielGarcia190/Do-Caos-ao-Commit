import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "O que é uma Branch (Ramificação)?",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        O que é uma Branch (Ramificação)?
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Trabalhando em universos paralelos
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">🌳</span>
                            <span className="flex-1">
                                Uma <span
                                    className="font-bold text-green-400">branch </span>
                                é uma <strong>linha de desenvolvimento
                                    independente</strong>.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">🛡️</span>
                            <span className="flex-1">
                                Permite criar novas funcionalidades, corrigir
                                bugs ou experimentar <strong>sem afetar a versão
                                    principal</strong> (a branch 'main').
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">🚀</span>
                            <span className="flex-1">
                                É a base do trabalho em equipe: cada pessoa pode
                                trabalhar na sua própria branch.
                            </span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
