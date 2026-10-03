import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-gray-100">
        Criando Pull Request 🔀
    </h2>

    <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl text-left">
        <li>1. Acesse o GitHub</li>
        <li>2. Clique em "Compare &amp; pull request"</li>
        <li>3. Crie o PR</li>
    </ul>
</div>
`;

export const title = "Criando Pull Request";

export default function Slide44() {
  return <SlideMarkup markup={markup} />;
}
