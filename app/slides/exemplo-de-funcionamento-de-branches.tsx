import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Exemplo de funcionamento de Branches",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full text-center">
                    <h2 className="text-5xl font-bold mb-8 text-gray-100">
                        Exemplo de funcionamento de Branches
                    </h2>
                    <div
                        className="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="https://uploads.sitepoint.com/wp-content/uploads/2019/06/155993572204-gitflow.png"
                            alt="Diferença Entre Git e GitHub"
                            className="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                </div>
    );
  },
};

export default slide;
