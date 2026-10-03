import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
 <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Adicionando arquivos do Git
                </h2>

                <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>git status</p>
                    <p>git add .</p>
                    <p>git status</p>
                </div>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 O arquivo foi para a área de staging
                </p>
            </div>
`;

export const title = "Adicionando arquivos do Git";

export default function Slide28() {
  return <SlideMarkup markup={markup} />;
}
