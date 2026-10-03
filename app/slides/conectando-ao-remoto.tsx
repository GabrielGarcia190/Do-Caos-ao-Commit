import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full">
    <h2 class="text-5xl font-bold mb-8 text-gray-100 text-center">
        Conectando ao remoto
    </h2>

    <div class="bg-gray-800 p-8 rounded-xl font-mono text-xl">
        <p>git remote add origin [URL]</p>
    </div>
</div>
`;

export const title = "Conectando ao remoto";

export default function Slide31() {
  return <SlideMarkup markup={markup} />;
}
