import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
                    <h2
                        class="text-center text-5xl font-bold mb-8">Diferença
                        entre Git e GitHub</h2>
                    <div class="grid grid-cols-2 gap-10">
                        <div
                            class="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-git-blue">
                            <h2
                                class="text-5xl font-bold mb-4 text-git-blue flex items-center">
                                <span class="icon-large">💻</span> GIT
                            </h2>
                            <h3
                                class="text-xl font-light mb-8 text-tech-light">
                                A Ferramenta de Versionamento
                            </h3>
                            <ul class="text-2xl space-y-4 list-none pl-0">
                                <li class="flex items-start gap-3">
                                    <span
                                        class="icon-large text-white text-3xl">⚙️</span>
                                    <span class="flex-1">
                                        Sistema de controle de versão
                                        <strong>distribuído</strong>.
                                    </span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span
                                        class="icon-large text-white text-3xl">🖥️</span>
                                    <span class="flex-1">
                                        Funciona <strong>localmente</strong> no
                                        seu computador.
                                    </span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span
                                        class="icon-large text-white text-3xl">🔑</span>
                                    <span class="flex-1">
                                        <strong>Software gratuito</strong> e de
                                        código aberto.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="p-6 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-gray-100">
                            <h2
                                class="text-5xl font-bold mb-4 text-gray-100 flex items-center">
                                <span class="icon-large">☁️</span> GITHUB
                            </h2>
                            <h3
                                class="text-xl font-light mb-8 text-tech-light">
                                O Serviço de Hospedagem
                            </h3>
                            <ul class="text-2xl space-y-4 list-none pl-0">
                                <li class="flex items-center gap-3">
                                    <span
                                        class="icon-large text-white text-3xl">🌐</span>
                                    <span>
                                        <strong>Plataforma online</strong> para
                                        hospedar repositórios Git.
                                    </span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <span
                                        class="icon-large text-white text-3xl">☁️</span>
                                    <span>
                                        Funciona <strong>na nuvem</strong>.
                                    </span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <span
                                        class="icon-large text-white text-3xl">⭐</span>
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
                        class="col-span-2 text-center mt-8 text-2xl p-4 bg-gray-700 rounded-lg">
                        <strong>Analogia:</strong> O Git é o Word (edita), o
                        GitHub é o Google Drive (armazena e compartilha).
                    </div>
                </div>
`;

export const title = "Diferença entre Git e GitHub";

export default function Slide06() {
  return <SlideMarkup markup={markup} />;
}
