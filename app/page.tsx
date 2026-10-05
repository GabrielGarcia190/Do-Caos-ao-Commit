"use client";

import { useCallback, useEffect, useState } from "react";
import slides from "./slides";

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(Math.min(Math.max(index, 0), slides.length - 1));
    setControlsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.code === "Space") {
        event.preventDefault();
        setCurrentSlide((slide) => Math.min(slide + 1, slides.length - 1));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setCurrentSlide((slide) => Math.max(slide - 1, 0));
      }
      setControlsVisible(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setControlsVisible(false), 3000);
    return () => window.clearTimeout(timer);
  }, [currentSlide, controlsVisible]);

  const slideAtual = slides[currentSlide];

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-gray-900"
      onMouseMove={() => setControlsVisible(true)}
    >
      {slideAtual.slide()}

      <nav
        aria-label="Navegação da apresentação"
        className={`fixed bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-6 transition-opacity duration-500 ${
          controlsVisible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Slide anterior"
          className="rounded-full bg-git-blue p-4 text-white shadow-2xl transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentSlide === 0}
          onClick={() => goToSlide(currentSlide - 1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <output
          aria-live="polite"
          className="rounded-full bg-gray-800 px-6 py-3 text-lg font-semibold text-gray-300 shadow-xl"
        >
          {slideAtual.numero} / {slides.length}
        </output>

        <button
          type="button"
          aria-label="Próximo slide"
          className="rounded-full bg-git-blue p-4 text-white shadow-2xl transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentSlide === slides.length - 1}
          onClick={() => goToSlide(currentSlide + 1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </nav>
    </main>
  );
}
