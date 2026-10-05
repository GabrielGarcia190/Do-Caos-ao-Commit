import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Vamos para a Prática!",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full text-center">
                    <h2 className="text-5xl font-bold mb-4 text-gray-100">
                        Vamos para a Prática!
                    </h2>
                    <h3 className="text-2xl font-light mb-8 text-git-blue">
                        Hora de colocar a mão no código.
                    </h3>
                    <div className="text-9xl mb-8">
                        ⌨️
                    </div>
                    <p
                        className="text-3xl p-6 bg-gray-800/50 rounded-xl shadow-2xl border-l-8 border-green-600">
                        Vamos ver um fluxo de trabalho real.
                    </p>
                </div>
    );
  },
};

export default slide;
