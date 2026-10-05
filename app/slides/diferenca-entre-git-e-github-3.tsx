import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Diferença Entre Git e GitHub",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full text-center">
                    <div
                        className="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="/Imagens/Reposit%C3%B3rio%20Git%20em%20Design%20Limpo.png"
                            alt="Diferença Entre Git e GitHub"
                            className="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                </div>
    );
  },
};

export default slide;
