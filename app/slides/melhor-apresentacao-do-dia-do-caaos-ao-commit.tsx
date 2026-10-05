import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Do caos ao Commit",
  slide() {
    return SlideMarkup(
<div className="text-center">
                    <div className="flex justify-center items-center gap-6 mb-8">
                        <img src="/Imagens/Git_icon.png" alt="Logo Git"
                            className="w-64 h-64" />
                        <span className="text-8xl font-bold text-white">+</span>
                        <img src="/Imagens/github_logo_icon.png"
                            alt="Logo GitHub"
                            className="w-64 h-64" />
                    </div>

                    <h1
                        className="text-8xl font-extrabold mb-4 text-git-blue tracking-tighter">
                       Do caos ao Commit
                    </h1>
                    <h2 className="text-4xl text-gray-200 font-light mb-12">
                        Organizando projetos com Git & GitHub
                    </h2>
                </div>
    );
  },
};

export default slide;
