import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-5xl w-full text-center">
    <h2 class="text-5xl font-bold mb-8 text-gray-100">
        Mundo Real 🚀
    </h2>

    <p class="text-2xl text-tech-light mb-6">
        Agora vamos simular um trabalho em equipe real
    </p>

    <p class="text-xl text-orange-400">
        Cada pessoa vai trabalhar no mesmo projeto
    </p>
</div>
`;

export const title = "Segunda Prática";

export default function Slide39() {
  return <SlideMarkup markup={markup} />;
}
