import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Fazendo commit",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Fazendo commit
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-2xl space-y-4">
        <p>git add .</p>
        <p>git commit -m [mensagem]</p>
        <p>git push origin feature-readme</p>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        <code>feat: adiciona informações no README</code>
    </p>
</div>
    );
  },
};

export default slide;
