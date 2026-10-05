import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Linus Torvalds",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full text-center">
                    <h2 className="text-5xl font-bold mb-8 text-gray-100">
                        Linus Torvalds
                    </h2>
                    <div
                        className="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg"
                            alt="Linus Torvalds"
                            className="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                    <h3 className="text-2xl font-light mt-4 text-git-blue">
                        O criador do Git e do Linux
                    </h3>
                </div>
    );
  },
};

export default slide;
