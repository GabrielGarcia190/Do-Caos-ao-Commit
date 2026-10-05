import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Criando um Pull Request",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-100">
        Criando um Pull Request
    </h2>

    <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl text-left">
        <li>1. Acesse o repositório no GitHub</li>
        <li>2. Clique em <strong>"Compare &amp; pull request"</strong></li>
        <li>3. Revise as alterações</li>
        <li>4. Clique em <strong>"Create pull request"</strong></li>
    </ul>

    <p className="text-xl mt-6 text-tech-light">
        💡 Aqui acontece a revisão de código!
    </p>
</div>
    );
  },
};

export default slide;
