import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full text-center">
                    <h2 class="text-5xl font-bold mb-12 text-gray-100">
                        Apresentado por
                    </h2>
                    <div class="grid grid-cols-2 gap-10">
                        <div class="flex flex-col items-center">
                            <div
                                class="bg-gray-800 p-4 rounded-xl shadow-2xl inline-block mb-6">
                                <img src="/Imagens/GGarcia.png"
                                    class="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light" />
                            </div>
                            <h3 class="text-4xl font-semibold text-git-blue">
                                Gabriel Garcia
                            </h3>
                            <div class="mt-6">
                                <img src="/Imagens/GarciaLinkedin.png"
                                    class="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light text-sm p-2" />
                            </div>
                        </div>

                        <div class="flex flex-col items-center">
                            <div
                                class="bg-gray-800 p-4 rounded-xl shadow-2xl inline-block mb-6">
                                <img
                                    src="/Imagens/Vini.jpeg"
                                    class="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light" />
                            </div>
                            <h3 class="text-4xl font-semibold text-git-blue">
                                Vinicius Pires
                            </h3>
                            <div class="mt-6">
                                <img src="/Imagens/LinkedinVini.png"
                                    class="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-tech-light text-sm p-2" />
                            </div>
                        </div>
                    </div>
                </div>
`;

export const title = "Apresentado por";

export default function Slide23() {
  return <SlideMarkup markup={markup} />;
}
