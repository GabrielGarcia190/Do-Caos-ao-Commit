import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
            <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Fazendo fork do projeto
                </h2>

                <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Acesso o projeto no GitHub: <strong>Do-Caos-ao-Commit-Painel</strong></li>
                    <li>2. Clique no botão <strong>"Fork"</strong></li>
                </ul>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 É necessário fazer este processo logado com sua conta do GitHub
                </p>
            </div>
`;

export const title = "Fazendo fork do projeto";

export default function Slide26() {
  return <SlideMarkup markup={markup} />;
}
