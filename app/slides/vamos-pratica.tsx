import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-6xl w-full text-center">
                <ul class="text-3xl space-y-6 list-none pl-0">
                    <li class="p-4 bg-gray-800/50 rounded-xl shadow-xl border-t-8 border-yellow-600 gap-4">
                        <h1 class="text-8xl font-extrabold mb-4 tracking-tighter text-gray-200 text-center">
                            Vamos para a prática
                        </h1>
                        </span>
                    </li>
                </ul>
            </div>
`;

export const title = "Vamos para a prática";

export default function Slide22() {
  return <SlideMarkup markup={markup} />;
}