import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-gray-100">
        Criando um Pull Request
    </h2>

    <ul class="text-2xl space-y-4 bg-gray-800 p-8 rounded-xl shadow-2xl text-left">
        <li>1. Acesse o repositório no GitHub</li>
        <li>2. Clique em <strong>"Compare &amp; pull request"</strong></li>
        <li>3. Revise as alterações</li>
        <li>4. Clique em <strong>"Create pull request"</strong></li>
    </ul>

    <p class="text-xl mt-6 text-tech-light">
        💡 Aqui acontece a revisão de código!
    </p>
</div>
`;

export const title = "Criando um Pull Request";

export default function Slide37() {
  return <SlideMarkup markup={markup} />;
}
