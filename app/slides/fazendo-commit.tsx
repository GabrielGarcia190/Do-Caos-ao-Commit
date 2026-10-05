import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
           <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Fazendo commit
                </h2>

                <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
                    <p>git commit -m "feat: seu nome de usuário"</p>
                </div>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 Agora salvamos no histórico!
                </p>
            </div>
`;

export const title = "Fazendo commit";

export default function Slide29() {
  return <SlideMarkup markup={markup} />;
}
