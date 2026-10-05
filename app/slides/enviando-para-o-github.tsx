import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Enviando para o GitHub",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Enviando para o GitHub
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git push</p>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        💡 Seu código agora está online!
    </p>
</div>
    );
  },
};

export default slide;
