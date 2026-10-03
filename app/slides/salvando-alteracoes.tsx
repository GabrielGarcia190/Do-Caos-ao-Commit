import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Salvando alterações ✅
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
        <p>git add .</p>
        <p>git commit -m "feat: adiciona meu nome"</p>
        <p>git push origin feature-seu-nome</p>
    </div>
</div>
`;

export const title = "Salvando alterações";

export default function Slide43() {
  return <SlideMarkup markup={markup} />;
}
