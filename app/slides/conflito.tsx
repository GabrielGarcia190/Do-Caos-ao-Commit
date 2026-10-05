import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Conflito",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-red-400">
        Conflito! 💥
    </h2>

    <p className="text-2xl text-gray-100 mb-6">
        O Git não sabe qual alteração manter
    </p>

    <p className="text-xl text-tech-light">
        Isso acontece quando duas pessoas alteram a mesma linha
    </p>
</div>
    );
  },
};

export default slide;
