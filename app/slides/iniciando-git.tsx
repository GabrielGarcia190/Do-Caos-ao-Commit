import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
 <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Iniciando o Git
                </h2>

                <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>git init</p>
                    <p>git status</p>
                </div>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 Agora sua pasta virou um repositório Git!
                </p>
            </div>
`;

export const title = "Iniciando o Git";

export default function Slide27() {
  return <SlideMarkup markup={markup} />;
}
