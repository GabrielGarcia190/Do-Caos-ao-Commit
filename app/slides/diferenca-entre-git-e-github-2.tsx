import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Diferença entre Git e GitHub",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full text-center">
                    <h2 className="text-5xl font-bold mb-8 text-gray-100">
                        Diferença entre Git e GitHub
                    </h2>
                    <div
                        className="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="/Imagens/Diferenca-Entre-Git-GitHub.png"
                            alt="Diferença Entre Git e GitHub"
                            className="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                </div>
    );
  },
};

export default slide;
