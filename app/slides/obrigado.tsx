import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Obrigado!",
  slide() {
    return SlideMarkup(
<div className="text-center">
                    <div className="text-9xl mb-8">
                        🎉
                    </div>
                    <h1
                        className="text-8xl font-extrabold mb-4 text-git-blue tracking-tighter">
                        Obrigado!
                    </h1>
                    <h2 className="text-4xl text-gray-200 font-light mb-12">
                        Perguntas?
                    </h2>
                    <p className="text-xl text-tech-light">
                        Continue praticando e bons commits!
                    </p>
                </div>
    );
  },
};

export default slide;
