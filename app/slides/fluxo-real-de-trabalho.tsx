import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Fluxo real de trabalho",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
                <h2 className="text-5xl font-bold mb-8 text-gray-100">
                    Fluxo real de trabalho 🎯
                </h2>

                <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl text-left">
                    <li>✔️ Clonar repositório</li>
                    <li>✔️ Criar branch</li>
                    <li>✔️ Fazer alterações</li>
                    <li>✔️ Criar Pull Request</li>
                    <li>✔️ Resolver conflitos</li>
                </ul>

                <p className="text-xl mt-6 text-orange-400">
                    💡 Isso é o dia a dia de um desenvolvedor
                </p>
            </div>
    );
  },
};

export default slide;
