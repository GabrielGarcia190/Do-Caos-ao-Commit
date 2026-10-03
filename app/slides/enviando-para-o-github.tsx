import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Enviando para o GitHub
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git push -u origin main</p>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Seu código agora está online!
    </p>
</div>
`;

export const title = "Enviando para o GitHub";

export default function Slide32() {
  return <SlideMarkup markup={markup} />;
}
