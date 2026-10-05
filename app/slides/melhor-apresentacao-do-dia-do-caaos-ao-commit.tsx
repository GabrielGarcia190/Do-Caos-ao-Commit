import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="text-center">
                    <div class="flex justify-center items-center gap-6 mb-8">
                        <img src="/Imagens/Git_icon.png" alt="Logo Git"
                            class="w-64 h-64">
                        <span class="text-8xl font-bold text-white">+</span>
                        <img src="/Imagens/github_logo_icon.png"
                            alt="Logo GitHub"
                            class="w-64 h-64">
                    </div>

                    <h1
                        class="text-8xl font-extrabold mb-4 text-git-blue tracking-tighter">
                       Do caos ao Commit
                    </h1>
                    <h2 class="text-4xl text-gray-200 font-light mb-12">
                        Organizando projetos com Git & GitHub
                    </h2>
                </div>
`;

export const title = "Do caos ao Commit";

export default function Slide01() {
  return <SlideMarkup markup={markup} />;
}
