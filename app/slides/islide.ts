import type { ElementoSlide } from "../components/slide-markup";

export interface ISlide {
  titulo: string;
  slide(): ElementoSlide;
}

export interface ISlideDaApresentacao extends ISlide {
  numero: number;
}
