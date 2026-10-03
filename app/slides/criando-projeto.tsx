import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
            <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Criando o projeto
                </h2>

                <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Clique com o botão direito na área de trabalho</li>
                    <li>2. Novo → Pasta</li>
                    <li>3. Nomeie como <strong>projeto-git</strong></li>
                    <li>4. Abra a pasta</li>
                </ul>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 Vamos trabalhar dentro dessa pasta
                </p>
            </div>
`;

export const title = "Criando o projeto";

export default function Slide24() {
  return <SlideMarkup markup={markup} />;
}