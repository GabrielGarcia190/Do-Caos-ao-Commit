import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Adicionando arquivos do Git",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Adicionando arquivos do Git
                </h2>

                <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>git status</p>
                    <p>git add .</p>
                    <p>git status</p>
                </div>

                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 O arquivo foi para a área de staging
                </p>
            </div>
    );
  },
};

export default slide;
