import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
            <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Criando um arquivo
                </h2>

                <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Clique com botão direito</li>
                    <li>2. Novo → Documento de Texto</li>
                    <li>3. Renomeie para <strong>README.md</strong></li>
                </ul>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 Esse será nosso primeiro arquivo versionado
                </p>
            </div>
`;

export const title = "Criando o arquivo";

export default function Slide25() {
  return <SlideMarkup markup={markup} />;
}