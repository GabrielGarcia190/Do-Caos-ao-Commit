import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full text-center">
                    <div
                        class="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="/Imagens/Reposit%C3%B3rio%20Git%20em%20Design%20Limpo.png"
                            alt="Diferença Entre Git e GitHub"
                            class="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                </div>
`;

export const title = "Diferença Entre Git e GitHub";

export default function Slide10() {
  return <SlideMarkup markup={markup} />;
}
