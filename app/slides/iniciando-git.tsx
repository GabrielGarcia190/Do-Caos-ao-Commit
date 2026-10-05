import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Iniciando o Git",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Alterando o projeto
                </h2>

                <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>No projeto clonado acesso o arquivo:</p>
                    <p>1. Econtre  o arquivo: 
                    <strong  className="inline-block rounded-lg bg-gray-900 px-3 py-1 font-mono text-sm font-semibold text-cyan-300 ring-1 ring-gray-700">
                          web/data/students.json
                    </strong>
                    </p>
                    <p>2. Abra o arquivo e faça uma alteração incluindo seus dados</p>
                </div>
                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 Agora sua pasta virou um repositório Git!
                </p>
            </div>
    );
  },
};

export default slide;
