import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-gray-100">
        Resolvendo o conflito 🛠️
    </h2>

    <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl text-left">
        <li>1. Abrir o Pull Request</li>
        <li>2. Clicar em "Resolve conflicts"</li>
        <li>3. Escolher ou ajustar o conteúdo</li>
        <li>4. Confirmar o merge</li>
    </ul>

    <p class="text-xl mt-6 text-tech-light">
        💡 O desenvolvedor decide qual versão manter
    </p>
</div>
`;

export const title = "Resolvendo o conflito";

export default function Slide46() {
  return <SlideMarkup markup={markup} />;
}
