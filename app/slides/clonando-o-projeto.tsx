import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Clonando o projeto",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Clonando o projeto 📥
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git clone [URL]</p>
        <p>cd nome-do-repositorio</p>
    </div>

    <p className="text-xl text-center mt-6 text-tech-light">
        💡 Agora todos estão com o mesmo projeto
    </p>
</div>
    );
  },
};

export default slide;
