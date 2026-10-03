import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Clonando o projeto 📥
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git clone [URL]</p>
        <p>cd nome-do-repositorio</p>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Agora todos estão com o mesmo projeto
    </p>
</div>
`;

export const title = "Clonando o projeto";

export default function Slide40() {
  return <SlideMarkup markup={markup} />;
}
