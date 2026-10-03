import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="text-center">
                    <div class="text-9xl mb-8">
                        🎉
                    </div>
                    <h1
                        class="text-8xl font-extrabold mb-4 text-git-blue tracking-tighter">
                        Obrigado!
                    </h1>
                    <h2 class="text-4xl text-gray-200 font-light mb-12">
                        Perguntas?
                    </h2>
                    <p class="text-xl text-tech-light">
                        Continue praticando e bons commits!
                    </p>
                </div>
`;

export const title = "Obrigado!";

export default function Slide49() {
  return <SlideMarkup markup={markup} />;
}
