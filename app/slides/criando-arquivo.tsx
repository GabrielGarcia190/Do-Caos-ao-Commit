import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
            <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Clonando o projeto
                </h2>

                <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Abra o terminal</li>
                    <li>2. Navegue até a pasta do projeto</li>
                    <li>3. Execute o comando :
                      <div
                            class="font-mono text-xl text-green-400 bg-black/50 p-4 mt-2 rounded-lg border-l-4 border-green-400">
                            <span class="icon-large text-3xl">▶️</span>
                            <span class="font-bold">git clone [URL do repositório]</span>
                            <span class="block text-tech-light text-sm mt-1">Clona um reposítório existente.</span>
                        </div>
                </div>
                </li>
                </ul>
                        

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 Esse será nosso primeiro arquivo versionado
                </p>
            </div>
`;

export const title = "Clonando o projeto";

export default function Slide25() {
  return <SlideMarkup markup={markup} />;
}