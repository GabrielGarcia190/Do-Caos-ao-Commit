import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Fazendo o Merge",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-100">
        Fazendo o Merge
    </h2>

    <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl text-left">
        <li>1. Revisar o Pull Request</li>
        <li>2. Aprovar as mudanças</li>
        <li>3. Clicar em <strong>"Merge pull request"</strong></li>
    </ul>

    <p className="text-xl mt-6 text-tech-light">
        💡 Agora a alteração foi integrada na main!
    </p>
</div>
    );
  },
};

export default slide;
