import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Segunda Prática",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-100">
        Mundo Real 🚀
    </h2>

    <p className="text-2xl text-tech-light mb-6">
        Agora vamos simular um trabalho em equipe real
    </p>

    <p className="text-xl text-orange-400">
        Cada pessoa vai trabalhar no mesmo projeto
    </p>
</div>
    );
  },
};

export default slide;
