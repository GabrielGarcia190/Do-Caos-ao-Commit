import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Vamos para a prática",
  slide() {
    return SlideMarkup(
<div className="max-w-6xl w-full text-center">
                <ul className="text-3xl space-y-6 list-none pl-0">
                    <li className="p-4 bg-gray-800/50 rounded-xl shadow-xl border-t-8 border-yellow-600 gap-4">
                        <h1 className="text-8xl font-extrabold mb-4 tracking-tighter text-gray-200 text-center">
                            Vamos para a prática
                        </h1>
                    </li>
                </ul>
            </div>
    );
  },
};

export default slide;
