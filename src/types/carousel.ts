export interface CarouselImage {
  src: string;
  bg: string;
  panel: string;
}

export interface CarouselItem {
  image: CarouselImage;
  title: string;
  description: string;
  route: string;
}

export type NavDirection = 'next' | 'prev';
export type CarouselRole = 'center' | 'left' | 'right' | 'back';
