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
                    <li>1. Clique com o botão direito na área de trabalho</li>
                    <li>2. Novo → Pasta</li>
                    <li>3. Nomeie como <strong>projeto-git</strong></li>
                    <li>4. Abra a pasta</li>
                </ul>

                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 Vamos trabalhar dentro dessa pasta
                </p>
            </div>
    );
  },
};

export default slide;
