import SlideMarkup from "../components/slide-markup";

const markup = String.raw`
<div class="max-w-4xl w-full text-center">
                    <h2 class="text-5xl font-bold mb-8 text-gray-100">
                        Linus Torvalds
                    </h2>
                    <div
                        class="bg-gray-800 p-6 rounded-xl shadow-2xl inline-block max-w-full max-h-[80vh]">
                        <img
                            src="https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg"
                            alt="Linus Torvalds"
                            class="w-full h-auto max-h-[60vh] object-contain rounded-lg" />
                    </div>
                    <h3 class="text-2xl font-light mt-4 text-git-blue">
                        O criador do Git e do Linux
                    </h3>
                </div>
`;

export const title = "Linus Torvalds";

export default function Slide05() {
  return <SlideMarkup markup={markup} />;
}
