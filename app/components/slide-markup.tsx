import { createElement, type ReactElement, type ReactNode } from "react";

export const marcaSlide = Symbol("slide");

export type ElementoSlide = ReactElement & {
  readonly [marcaSlide]: typeof marcaSlide;
};

export function SlideMarkup(children: ReactNode): ElementoSlide {
  return createElement(
    "section",
    {
      className: "slide-page bg-gray-900 text-gray-100 antialiased",
    },
    children,
  ) as unknown as ElementoSlide;
}
