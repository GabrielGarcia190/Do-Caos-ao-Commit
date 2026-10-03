import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Alterando o projeto
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl shadow-2xl text-2xl space-y-4">
        <p>1. Abra o arquivo <strong>README.md</strong></p>
        <p>2. Adicione o conteúdo abaixo:</p>
        <code>
            <p>## Funcionalidades</p>
            <p>- Projeto de exemplo com Git</p>
        </code>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Ainda NÃO vamos fazer commit!
    </p>
</div>
`;

export const title = "Alterando o projeto";

export default function Slide34() {
  return <SlideMarkup markup={markup} />;
}
