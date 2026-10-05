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

                <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>git commit -m "feat: seu nome de usuário"</p>
                </div>

                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 Agora salvamos no histórico!
                </p>
            </div>
    );
  },
};

export default slide;
