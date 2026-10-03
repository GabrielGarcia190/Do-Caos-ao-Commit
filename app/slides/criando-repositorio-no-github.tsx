import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-gray-100">
        Criando repositório no GitHub
    </h2>

    <p class="text-2xl text-orange-400">
        Crie um repositório sem README e copie a URL
    </p>
</div>
`;

export const title = "Criando repositório no GitHub";

export default function Slide30() {
  return <SlideMarkup markup={markup} />;
}
