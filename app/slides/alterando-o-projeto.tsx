import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Alterando o projeto",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Alterando o projeto
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-2xl space-y-4">
        <p>1. Abra o arquivo <strong>README.md</strong></p>
        <p>2. Adicione o conteúdo abaixo:</p>
        <code>
            <p>## Funcionalidades</p>
            <p>- Projeto de exemplo com Git</p>
        </code>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        💡 Ainda NÃO vamos fazer commit!
    </p>
</div>
    );
  },
};

export default slide;
