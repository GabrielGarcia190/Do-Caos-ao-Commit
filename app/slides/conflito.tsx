import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-red-400">
        Conflito! 💥
    </h2>

    <p class="text-2xl text-gray-100 mb-6">
        O Git não sabe qual alteração manter
    </p>

    <p class="text-xl text-tech-light">
        Isso acontece quando duas pessoas alteram a mesma linha
    </p>
</div>
`;

export const title = "Conflito";

export default function Slide45() {
  return <SlideMarkup markup={markup} />;
}
