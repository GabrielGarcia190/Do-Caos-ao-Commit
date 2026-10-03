import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full">
                    <h2 class="text-5xl font-bold mb-4 text-gray-100">
                        Principais Comandos do Git I
                    </h2>
                    <h3 class="text-2xl font-light mb-8 text-git-blue">
                        Iniciando, Copiando e Verificando
                    </h3>
                    <div
                        class="bg-github-gray p-8 rounded-xl shadow-2xl space-y-6">
                        <div
                            class="font-mono text-xl text-green-400 bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                            <span class="icon-large text-3xl">▶️</span>
                            <span class="font-bold">git init</span>
                            <span
                                class="block text-tech-light text-sm mt-1">Cria
                                um novo repositório local.</span>
                        </div>
                        <div
                            class="font-mono text-xl text-green-400 bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                            <span class="icon-large text-3xl">⬇️</span>
                            <span class="font-bold">git clone [URL]</span>
                            <span
                                class="block text-tech-light text-sm mt-1">Copia
                                um repositório remoto para sua
                                máquina.</span>
                        </div>
                        <div
                            class="font-mono text-xl text-green-400 bg-black/50 p-4 rounded-lg border-l-4 border-green-400">
                            <span class="icon-large text-3xl">🔍</span>
                            <span class="font-bold">git status</span>
                            <span
                                class="block text-tech-light text-sm mt-1">Mostra
                                o estado dos arquivos no repositório.</span>
                        </div>
                    </div>
                </div>
`;

export const title = "Principais Comandos do Git I";

export default function Slide12() {
  return <SlideMarkup markup={markup} />;
}
