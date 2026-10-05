import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Criando repositório no GitHub",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-100">
        Criando repositório no GitHub
    </h2>

    <p className="text-2xl text-orange-400">
        Crie um repositório sem README e copie a URL
    </p>
</div>
    );
  },
};

export default slide;
