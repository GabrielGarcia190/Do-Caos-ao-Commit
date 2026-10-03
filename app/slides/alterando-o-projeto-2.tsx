import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Alterando o projeto ✏️
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl text-2xl space-y-4">
        <p>Abra o arquivo <strong>README.md</strong></p>
        <p>Encontre a linha:</p>

        <div class="bg-black/50 p-4 rounded-xl font-mono text-xl">
            <p>- Nome aqui</p>
        </div>

        <p>Substitua pelo seu nome</p>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Todos devem alterar a MESMA linha
    </p>
</div>
`;

export const title = "Alterando o projeto";

export default function Slide42() {
  return <SlideMarkup markup={markup} />;
}
