import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Padronização de Commits",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Padronização de Commits
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-green-400">
                        A Estrutura que Organiza o Histórico
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-center gap-3">
                            <span className="icon-large text-white">📝</span>
                            <span>
                                <strong>O Padrão:</strong> Utiliza o
                                <strong> Conventional Commits</strong>.
                                Formato:
                                <code>Tipo(Escopo): Objetivo</code>
                                (Ex:
                                <code>feat(auth): add login button</code>).
                            </span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-center gap-3">
                            <span className="icon-large text-white">🛠️</span>
                            <span>
                                <strong>Principais Tipos:</strong>
                                <strong>feat</strong>
                                (nova funcionalidade),
                                <strong>fix</strong>
                                (correção de bug),
                                <strong>docs</strong>
                                (documentação),
                                <strong>chore</strong>
                                (tarefas de rotina).
                            </span>
                        </li>

                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-center gap-3">
                            <span className="icon-large text-white">✨</span>
                            <span>
                                <strong>O Benefício:</strong>
                                Facilita a
                                <strong> leitura do histórico</strong>,
                                permite a
                                <strong> geração automática de
                                    Changelogs</strong>
                                e é a base para o
                                **Semantic Versioning** (usado pelo Semantic
                                Release).
                            </span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
