import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Principais Comandos do Git II",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Principais Comandos do Git II
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Salvando Alterações Localmente
                    </h3>
                    <div
                        className="bg-github-gray p-8 rounded-xl shadow-2xl space-y-6">
                        <div
                            className="font-mono text-xl text-yellow-400 bg-black/50 p-4 rounded-lg border-l-4 border-yellow-400">
                            <span className="icon-large text-3xl">➕</span>
                            <span className="font-bold">git add [arquivo] / git
                                add .</span>
                            <span
                                className="block text-tech-light text-sm mt-1">Adiciona
                                arquivos à área de staging.</span>
                        </div>
                        <div
                            className="font-mono text-xl text-git-blue bg-black/50 p-4 rounded-lg border-l-4 border-git-blue">
                            <span className="icon-large text-3xl">✅</span>
                            <span className="font-bold">git commit -m
                                "Mensagem"</span>
                            <span
                                className="block text-tech-light text-sm mt-1">Registra
                                as mudanças no histórico local.</span>
                        </div>
                    </div>
                </div>
    );
  },
};

export default slide;
