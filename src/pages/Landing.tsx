import { HeroCarousel } from '../components/carousel/HeroCarousel';
import { PreviewCards } from '../components/landing/PreviewCards';
import { CAROUSEL_ITEMS } from '../data/carouselItems';

export function Landing() {
  return (
    <main>
      <HeroCarousel items={CAROUSEL_ITEMS} />
      <PreviewCards items={CAROUSEL_ITEMS} />
    </main>
  );
}
