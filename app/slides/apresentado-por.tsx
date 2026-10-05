import { SlideMarkup } from "../components/slide-markup";
import type { ISlide } from "./islide";

const slide: ISlide = {
  titulo: "Apresentado por",
  slide() {
    return SlideMarkup(
<div className="max-w-4xl w-full text-center">
                    <h2 className="text-5xl font-bold mb-12 text-gray-100">
                        Apresentado por
                    </h2>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col items-center">
                            <div
                                className="bg-gray-800 p-4 rounded-xl shadow-2xl inline-block mb-6">
                                <img src="/Imagens/GGarcia.png"
                                    className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light" />
                            </div>
                            <h3 className="text-4xl font-semibold text-git-blue">
                                Gabriel Garcia
                            </h3>
                            <div className="mt-6">
                                <img src="/Imagens/GarciaLinkedin.png"
                                    className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light text-sm p-2" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                className="bg-gray-800 p-4 rounded-xl shadow-2xl inline-block mb-6">
                                <img
                                    src="/Imagens/PMasson.jpg"
                                    className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light" />
                            </div>
                            <h3 className="text-4xl font-semibold text-git-blue">
                                Pedro Masson    
                            </h3>
                            <div className="mt-6">
                                <img src="/Imagens/PedroLinkedin.jpeg"
                                    className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light text-sm p-2" />
                            </div>
                        </div>
                    </div>
                </div>
    );
  },
};

export default slide;
