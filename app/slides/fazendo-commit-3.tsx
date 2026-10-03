import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Fazendo commit
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl shadow-2xl text-2xl space-y-4">
        <p>git add .</p>
        <p>git commit -m [mensagem]</p>
        <p>git push origin feature-readme</p>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        <code>feat: adiciona informações no README</code>
    </p>
</div>
`;

export const title = "Fazendo commit";

export default function Slide36() {
  return <SlideMarkup markup={markup} />;
}
