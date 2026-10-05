import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Exemplo de arquivo JSON
    </h2>

    <div class="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">

        <!-- Cabeçalho -->
        <div class="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-700">
            <span class="text-cyan-300 font-semibold">
                web/data/students.json
            </span>

            <div class="flex gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
        </div>

        <!-- Código -->
        <pre class="overflow-x-auto p-8 text-lg leading-9">
<code><span class="text-gray-400">{</span>
  <span class="text-blue-400">"id"</span><span class="text-white">:</span> <span class="text-green-400">"14"</span>,
  <span class="text-blue-400">"fullName"</span><span class="text-white">:</span> <span class="text-green-400">"Seu Nome"</span>,
  <span class="text-blue-400">"completionYear"</span><span class="text-white">:</span> <span class="text-orange-400">2026</span>,
  <span class="text-blue-400">"occupation"</span><span class="text-white">:</span> <span class="text-green-400">"Sua ocupação"</span>,
  <span class="text-blue-400">"imageUrl"</span><span class="text-white">:</span> <span class="text-green-400">"https://exemplo.com/sua-foto.jpg"</span>,
  <span class="text-blue-400">"profileUrl"</span><span class="text-white">:</span> <span class="text-green-400">"https://github.com/seu-usuario"</span>
<span class="text-gray-400">}</span></code>
        </pre>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Altere os valores e adicione suas próprias informações.
    </p>
</div>
`;

export const title = "Iniciando o Git";

export default function Slide51() {
  return <SlideMarkup markup={markup} />;
}
