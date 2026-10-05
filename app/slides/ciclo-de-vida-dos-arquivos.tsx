import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Ciclo de Vida dos Arquivos",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Ciclo de Vida dos Arquivos
                    </h2>
                    <h3 className="text-2xl font-light mb-12 text-git-blue">
                        Untracked → Tracked → Staged → Committed
                    </h3>
                    <div
                        className="flex justify-between items-center text-center">
                        <div
                            className="flex-1 p-4 bg-gray-800 rounded-xl shadow-xl mx-2 transition-transform hover:scale-105">
                            <p className="text-5xl mb-2 text-red-400">❓</p>
                            <h4 className="text-xl font-semibold">Untracked</h4>
                            <p className="text-sm text-tech-light">O Git ainda
                                não está monitorando o arquivo.</p>
                        </div>
                        <div
                            className="text-5xl text-blue-400 font-extrabold flex items-center justify-center w-12 h-12">→</div>
                        <div
                            className="flex-1 p-4 bg-gray-800 rounded-xl shadow-xl mx-2 transition-transform hover:scale-105">
                            <p className="text-5xl mb-2 text-yellow-400">📝</p>
                            <h4 className="text-xl font-semibold">Tracked
                                (Modified)</h4>
                            <p className="text-sm text-tech-light">O Git
                                acompanha o arquivo, mas ele tem mudanças
                                pendentes.</p>
                        </div>
                        <div
                            className="text-5xl text-blue-400 font-extrabold flex items-center justify-center w-12 h-12">→</div>
                        <div
                            className="flex-1 p-4 bg-gray-800 rounded-xl shadow-xl mx-2 transition-transform hover:scale-105">
                            <p className="text-5xl mb-2 text-green-400">✅</p>
                            <h4 className="text-xl font-semibold">Staged</h4>
                            <p className="text-sm text-tech-light">Arquivo
                                preparado para o próximo commit (com &#96;git
                                add&#96;).</p>
                        </div>
                        <div
                            className="text-5xl text-blue-400 font-extrabold flex items-center justify-center w-12 h-12">→</div>
                        <div
                            className="flex-1 p-4 bg-gray-800 rounded-xl shadow-xl mx-2 transition-transform hover:scale-105">
                            <p className="text-5xl mb-2 text-git-blue">🏷️</p>
                            <h4 className="text-xl font-semibold">Committed</h4>
                            <p className="text-sm text-tech-light">As mudanças
                                foram salvas no histórico local.</p>
                        </div>
                    </div>
                </div>
    );
  },
};

export default slide;
