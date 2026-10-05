import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Principais Comandos do Git I",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Principais Comandos do Git I
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Iniciando, Copiando e Verificando
                    </h3>
                    <div
                        className="bg-github-gray p-8 rounded-xl shadow-2xl space-y-6">
                        <div
                            className="font-mono text-xl text-green-400 bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                            <span className="icon-large text-3xl">▶️</span>
                            <span className="font-bold">git init</span>
                            <span
                                className="block text-tech-light text-sm mt-1">Cria
                                um novo repositório local.</span>
                        </div>
                        <div
                            className="font-mono text-xl text-green-400 bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                            <span className="icon-large text-3xl">⬇️</span>
                            <span className="font-bold">git clone [URL]</span>
                            <span
                                className="block text-tech-light text-sm mt-1">Copia
                                um repositório remoto para sua
                                máquina.</span>
                        </div>
                        <div
                            className="font-mono text-xl text-green-400 bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                            <span className="icon-large text-3xl">🔍</span>
                            <span className="font-bold">git status</span>
                            <span
                                className="block text-tech-light text-sm mt-1">Mostra
                                o estado dos arquivos no repositório.</span>
                        </div>
                    </div>
                </div>
    );
  },
};

export default slide;
