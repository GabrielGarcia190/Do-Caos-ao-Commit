import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Resolvendo o conflito",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full text-center">
    <h2 className="text-5xl font-bold mb-8 text-gray-100">
        Resolvendo o conflito 🛠️
    </h2>

    <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl text-left">
        <li>1. Abrir o Pull Request</li>
        <li>2. Clicar em "Resolve conflicts"</li>
        <li>3. Escolher ou ajustar o conteúdo</li>
        <li>4. Confirmar o merge</li>
    </ul>

    <p className="text-xl mt-6 text-tech-light">
        💡 O desenvolvedor decide qual versão manter
    </p>
</div>
    );
  },
};

export default slide;
