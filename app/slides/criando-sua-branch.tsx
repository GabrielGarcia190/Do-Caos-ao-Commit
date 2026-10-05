import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Criando sua branch",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Criando sua branch 🌿
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git checkout -b feature-seu-nome</p>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        💡 Cada pessoa deve usar seu próprio nome
    </p>
</div>
    );
  },
};

export default slide;
