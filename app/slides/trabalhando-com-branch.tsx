import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Trabalhando com branch",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Trabalhando com branch
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
        <p>git checkout -b feature-readme</p>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        💡 Nunca trabalhe direto na main!
    </p>
</div>
    );
  },
};

export default slide;
