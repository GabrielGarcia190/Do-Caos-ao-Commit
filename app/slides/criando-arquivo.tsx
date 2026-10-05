import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Clonando o projeto",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Clonando o projeto
                </h2>

                <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Abra o terminal</li>
                    <li>2. Navegue até a pasta do projeto</li>
                    <li>3. Execute o comando :
                      <div
                            className="font-mono text-xl text-green-400 bg-black/50 p-4 mt-2 rounded-lg border-l-4 border-green-400">
                            <span className="icon-large text-3xl">▶️</span>
                            <span className="font-bold">git clone [URL do repositório]</span>
                            <span className="block text-tech-light text-sm mt-1">Clona um reposítório existente.</span>
                        </div>
                </li>
                </ul>
                        

                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 Esse será nosso primeiro arquivo versionado
                </p>
            </div>
    );
  },
};

export default slide;
