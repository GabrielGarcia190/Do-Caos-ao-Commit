import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Merge (Mesclagem) e Conflitos",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Merge (Mesclagem) e Conflitos
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Juntando o trabalho... ou não.
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div
                            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-purple-400">
                            <h4
                                className="text-3xl font-semibold mb-3 flex items-center"><span
                                    className="icon-large">🤝</span> Merge</h4>
                            <ul className="text-xl space-y-2 list-none pl-0">
                                <li><span className="text-green-400">»</span> É
                                    o ato de <strong>integrar as
                                        mudanças</strong> de uma branch em
                                    outra.</li>
                                <li><span className="text-green-400">»</span> O
                                    Git tenta juntar os históricos de forma
                                    automática.</li>
                                <li><span
                                        className="text-git-blue font-mono">&#96;git
                                        merge nome-da-branch&#96;</span></li>
                            </ul>
                        </div>
                        <div
                            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-red-400">
                            <h4
                                className="text-3xl font-semibold mb-3 flex items-center"><span
                                    className="icon-large">💥</span>
                                Conflito</h4>
                            <ul className="text-xl space-y-2 list-none pl-0">
                                <li><span className="text-red-400">»</span>
                                    Ocorre quando o Git <strong>não sabe
                                        qual mudança manter</strong>.</li>
                                <li><span className="text-red-400">»</span> Ex:
                                    Duas pessoas alteraram a <strong>mesma
                                        linha</strong> em arquivos
                                    diferentes.</li>
                                <li><span className="text-red-400">»</span> O
                                    Git para o processo e exige que o
                                    <strong>desenvolvedor resolva
                                        manualmente</strong>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
  },
};

export default slide;
