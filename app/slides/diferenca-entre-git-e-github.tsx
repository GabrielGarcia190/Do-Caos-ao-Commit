import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Diferença entre Git e GitHub",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
                    <h2
                        className="text-center text-5xl font-bold mb-8">Diferença
                        entre Git e GitHub</h2>
                    <div className="grid grid-cols-2 gap-10">
                        <div
                            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-git-blue">
                            <h2
                                className="text-5xl font-bold mb-4 text-git-blue flex items-center">
                                <span className="icon-large">💻</span> GIT
                            </h2>
                            <h3
                                className="text-xl font-light mb-8 text-tech-light">
                                A Ferramenta de Versionamento
                            </h3>
                            <ul className="text-2xl space-y-4 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span
                                        className="icon-large text-white text-3xl">⚙️</span>
                                    <span className="flex-1">
                                        Sistema de controle de versão
                                        <strong>distribuído</strong>.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span
                                        className="icon-large text-white text-3xl">🖥️</span>
                                    <span className="flex-1">
                                        Funciona <strong>localmente</strong> no
                                        seu computador.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span
                                        className="icon-large text-white text-3xl">🔑</span>
                                    <span className="flex-1">
                                        <strong>Software gratuito</strong> e de
                                        código aberto.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-gray-100">
                            <h2
                                className="text-5xl font-bold mb-4 text-gray-100 flex items-center">
                                <span className="icon-large">☁️</span> GITHUB
                            </h2>
                            <h3
                                className="text-xl font-light mb-8 text-tech-light">
                                O Serviço de Hospedagem
                            </h3>
                            <ul className="text-2xl space-y-4 list-none pl-0">
                                <li className="flex items-center gap-3">
                                    <span
                                        className="icon-large text-white text-3xl">🌐</span>
                                    <span>
                                        <strong>Plataforma online</strong> para
                                        hospedar repositórios Git.
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span
                                        className="icon-large text-white text-3xl">☁️</span>
                                    <span>
                                        Funciona <strong>na nuvem</strong>.
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span
                                        className="icon-large text-white text-3xl">⭐</span>
                                    <span>
                                        Usa Git, com <strong>recursos
                                            adicionais</strong> (colaboração,
                                        issues).
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="col-span-2 text-center mt-8 text-2xl p-4 bg-gray-700 rounded-lg">
                        <strong>Analogia:</strong> O Git é o Word (edita), o
                        GitHub é o Google Drive (armazena e compartilha).
                    </div>
                </div>
    );
  },
};

export default slide;
