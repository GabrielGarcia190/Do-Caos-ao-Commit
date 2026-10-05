import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
 <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Alterando o projeto
                </h2>

                <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>No projeto clonado acesso o arquivo:</p>
                    <p>1. Econtre  o arquivo: 
                    <strong  class="inline-block rounded-lg bg-gray-900 px-3 py-1 font-mono text-sm font-semibold text-cyan-300 ring-1 ring-gray-700">
                          web/data/students.json
                    </strong>
                    </p>
                    <p>2. Abra o arquivo e faça uma alteração incluindo seus dados</p>
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
