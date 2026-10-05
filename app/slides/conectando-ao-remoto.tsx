import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Conectando ao remoto",
  slide() {
    return SlideMarkup(
<div className="max-w-5xl w-full">
    <h2 className="text-5xl font-bold mb-8 text-gray-100 text-center">
        Conectando ao remoto
    </h2>

    <div className="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git remote add origin [URL]</p>
    </div>
</div>
    );
  },
};

export default slide;
