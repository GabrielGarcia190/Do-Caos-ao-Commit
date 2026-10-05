import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Vantagens de usar Git e GitHub",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Vantagens de usar Git e GitHub
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Por que usar em projetos reais
                    </h3>
                    <ul className="text-3xl space-y-6 list-none pl-0">
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">🤝</span>
                            <span className="flex-1">
                                <strong>Trabalho em equipe:</strong> Várias
                                pessoas contribuem sem sobrescrever o código
                                umas das outras.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">📜</span>
                            <span className="flex-1">
                                <strong>Histórico completo:</strong> Você pode
                                ver todas as versões, quem fez o quê e por quê.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">🌎</span>
                            <span className="flex-1">
                                <strong>Colaboração pública:</strong> Fácil de
                                abrir projetos open source ou contribuir em
                                outros.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">🚀</span>
                            <span className="flex-1">
                                <strong>Integração:</strong> Conecta-se com
                                ferramentas modernas como CI/CD, automações e
                                controle de issues.
                            </span>
                        </li>
                        <li
                            className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-l-8 border-green-600 flex items-start gap-4">
                            <span className="icon-large">📈</span>
                            <span className="flex-1">
                                <strong>Portfólio:</strong> O GitHub tornou-se
                                uma espécie de 'Linkedin de desenvolvedores'.
                            </span>
                        </li>
                    </ul>
                </div>
    );
  },
};

export default slide;
