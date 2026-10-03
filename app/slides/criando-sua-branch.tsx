import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Criando sua branch 🌿
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git checkout -b feature-seu-nome</p>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Cada pessoa deve usar seu próprio nome
    </p>
</div>
`;

export const title = "Criando sua branch";

export default function Slide41() {
  return <SlideMarkup markup={markup} />;
}
