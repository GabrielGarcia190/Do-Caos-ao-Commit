import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-gray-100">
        Fazendo o Merge
    </h2>

    <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl text-left">
        <li>1. Revisar o Pull Request</li>
        <li>2. Aprovar as mudanças</li>
        <li>3. Clicar em <strong>"Merge pull request"</strong></li>
    </ul>

    <p class="text-xl mt-6 text-tech-light">
        💡 Agora a alteração foi integrada na main!
    </p>
</div>
`;

export const title = "Fazendo o Merge";

export default function Slide38() {
  return <SlideMarkup markup={markup} />;
}
