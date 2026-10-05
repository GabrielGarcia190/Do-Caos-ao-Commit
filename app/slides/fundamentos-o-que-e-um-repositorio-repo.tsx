import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Fundamentos: O que é um Repositório (Repo)?",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Fundamentos: O que é um Repositório (Repo)?
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        A 'Caixa de Tempo' do seu Projeto
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-purple-600 flex items-start gap-4">
                            <span className="icon-large">📦</span>
                            <span className="flex-1">
                                É o local onde seu projeto e todo o
                                <strong>histórico de versões</strong> ficam
                                armazenados.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-purple-600 flex items-start gap-4">
                            <span className="icon-large">🖥️</span>
                            <span className="flex-1">
                                <strong>Local:</strong> Fica no seu computador.
                                Você faz commits, edita e testa ali.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-purple-600 flex items-start gap-4">
                            <span className="icon-large">☁️</span>
                            <span className="flex-1">
                                <strong>Remoto:</strong> Uma cópia hospedada
                                online (no GitHub) onde outras pessoas podem
                                acessar e colaborar.
                            </span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
