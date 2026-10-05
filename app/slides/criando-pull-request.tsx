import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Criando Pull Request",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-100">
        Criando Pull Request 🔀
    </h2>

    <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl text-left">
        <li>1. Acesse o GitHub</li>
        <li>2. Clique em "Compare &amp; pull request"</li>
        <li>3. Crie o PR</li>
    </ul>
</div>
    );
  },
};

export default slide;
