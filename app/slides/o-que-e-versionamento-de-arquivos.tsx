import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full text-center">
                    <h2 class="text-5xl font-bold mb-8 text-gray-100">
                        O que é Versionamento de Arquivos?
                    </h2>
                    <div
                        class="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="/Imagens/Controle%20de%20Vers%C3%A3o%20em%20Arquivos.PNG"
                            alt="Diferença Entre Git e GitHub"
                            class="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                </div>
`;

export const title = "O que é Versionamento de Arquivos?";

export default function Slide03() {
  return <SlideMarkup markup={markup} />;
}
