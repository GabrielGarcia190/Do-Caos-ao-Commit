import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Trabalhando com branch
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl space-y-4">
        <p>git checkout -b feature-readme</p>
    </div>

    <p class="text-xl text-center mt-6 text-tech-light">
        💡 Nunca trabalhe direto na main!
    </p>
</div>
`;

export const title = "Trabalhando com branch";

export default function Slide33() {
  return <SlideMarkup markup={markup} />;
}
