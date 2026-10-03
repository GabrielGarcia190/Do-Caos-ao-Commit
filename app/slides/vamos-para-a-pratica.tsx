import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full text-center">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        Vamos para a Prática!
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Hora de colocar a mão no código.
                    </h3>
                    <div class="text-9xl mb-8">
                        ⌨️
                    </div>
                    <p
                        class="text-3xl p-6 bg-gray-800/50 rounded-xl shadow-2xl border-l-8 border-green-600">
                        Vamos ver um fluxo de trabalho real.
                    </p>
                </div>
`;

export const title = "Vamos para a Prática!";

export default function Slide20() {
  return <SlideMarkup markup={markup} />;
}
