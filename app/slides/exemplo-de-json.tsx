import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
    titulo: "Iniciando o Git",
    slide() {
        return SlideMarkup(
            <div className="max-w-5xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Exemplo de arquivo JSON
                </h2>

                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">

                    <div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-700">
                        <span className="text-cyan-300 font-semibold">
                            web/data/students.json
                        </span>

                        <div className="flex gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>
                    </div>

                    <pre className="overflow-x-auto p-8 text-lg leading-9">
                        <code className="flex flex-col text-left">

                            <div>
                                <span className="text-gray-400">{"{"}</span>
                            </div>

                            <div className="pl-6">
                                <span className="text-blue-400">"id"</span>
                                <span className="text-white">: </span>
                                <span className="text-green-400">"14"</span>,
                            </div>

                            <div className="pl-6">
                                <span className="text-blue-400">"fullName"</span>
                                <span className="text-white">: </span>
                                <span className="text-green-400">"Seu Nome"</span>,
                            </div>

                            <div className="pl-6">
                                <span className="text-blue-400">"completionYear"</span>
                                <span className="text-white">: </span>
                                <span className="text-orange-400">2026</span>,
                            </div>

                            <div className="pl-6">
                                <span className="text-blue-400">"occupation"</span>
                                <span className="text-white">: </span>
                                <span className="text-green-400">"Sua ocupação"</span>,
                            </div>

                            <div className="pl-6">
                                <span className="text-blue-400">"imageUrl"</span>
                                <span className="text-white">: </span>
                                <span className="text-green-400">"https://exemplo.com/sua-foto.jpg"</span>,
                            </div>

                            <div className="pl-6">
                                <span className="text-blue-400">"profileUrl"</span>
                                <span className="text-white">: </span>
                                <span className="text-green-400">"https://github.com/seu-usuario"</span>
                            </div>

                            <div>
                                <span className="text-gray-400">{"}"}</span>
                            </div>
                        </code>
                    </pre>
                </div>
                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 Altere os valores e adicione suas próprias informações.
                </p>
            </div>
        );
    },
};

export default slide;
