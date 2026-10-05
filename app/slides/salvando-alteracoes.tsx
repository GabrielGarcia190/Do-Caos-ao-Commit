import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Salvando alterações",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Salvando alterações ✅
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
        <p>git add .</p>
        <p>git commit -m "feat: adiciona meu nome"</p>
        <p>git push origin feature-seu-nome</p>
    </div>
</div>
    );
  },
};

export default slide;
