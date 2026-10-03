import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
            <div class="max-w-5xl w-full">
                <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
                    Abrindo o terminal
                </h2>

                <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <li>1. Dentro da pasta <strong>projeto-git</strong></li>
                    <li>2. Clique com o botão direito</li>
                    <li>3. Clique em <strong>"Abrir no terminal"</strong></li>
                </ul>

                <p class="text-xl text-center mt-6 text-tech-light">
                    💡 Pode ser PowerShell, CMD ou Git Bash
                </p>
            </div>
`;

export const title = "Abrindo o terminal";

export default function Slide26() {
  return <SlideMarkup markup={markup} />;
}
