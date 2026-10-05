import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Fazendo fork do projeto",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Fazendo fork do projeto
                </h2>

                <ul className="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Acesso o projeto no GitHub: <strong>Do-Caos-ao-Commit-Painel</strong></li>
                    <li>2. Clique no botão <strong>"Fork"</strong></li>
                </ul>

                <p className="text-xl text-center mt-6 text-tech-light">
                    💡 É necessário fazer este processo logado com sua conta do GitHub
                </p>
            </div>
    );
  },
};

export default slide;
