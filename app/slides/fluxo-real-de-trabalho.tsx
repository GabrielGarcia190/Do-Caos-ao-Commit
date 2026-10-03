import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
            <div class="max-w-5xl w-full text-center">
                <h2 class="text-5xl font-bold mb-8 text-gray-100">
                    Fluxo real de trabalho 🎯
                </h2>

                <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl text-left">
                    <li>✔️ Clonar repositório</li>
                    <li>✔️ Criar branch</li>
                    <li>✔️ Fazer alterações</li>
                    <li>✔️ Criar Pull Request</li>
                    <li>✔️ Resolver conflitos</li>
                </ul>

                <p class="text-xl mt-6 text-orange-400">
                    💡 Isso é o dia a dia de um desenvolvedor
                </p>
            </div>
`;

export const title = "Fluxo real de trabalho";

export default function Slide47() {
  return <SlideMarkup markup={markup} />;
}
