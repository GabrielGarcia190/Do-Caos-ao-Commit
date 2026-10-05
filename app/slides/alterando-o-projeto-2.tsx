import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Alterando o projeto",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Alterando o projeto ✏️
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl text-2xl space-y-4">
        <p>Abra o arquivo <strong>README.md</strong></p>
        <p>Encontre a linha:</p>

        <div className="bg-black/50 p-4 rounded-xl font-mono text-xl">
            <p>- Nome aqui</p>
        </div>

        <p>Substitua pelo seu nome</p>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        💡 Todos devem alterar a MESMA linha
    </p>
</div>
    );
  },
};

export default slide;
