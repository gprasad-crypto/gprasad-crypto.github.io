import type { CarouselItem } from '../types/carousel';

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    image: {
      src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
      bg: '#F4845F',
      panel: '#F79B7F',
    },
    title: 'OVERALL EXPERIENCE',
    description: 'From first designer to building a team of 90. A career arc across three Salesforce clouds.',
    route: '/experience',
  },
  {
    image: {
      src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
      bg: '#6BBF7A',
      panel: '#85CC92',
    },
    title: 'CONSUMER GOODS',
    description: 'Building the first offline-first mobile app for field sales reps — from blank canvas to enterprise.',
    route: '/consumer-goods',
  },
  {
    image: {
      src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
      bg: '#E882B4',
      panel: '#ED9DC4',
    },
    title: 'HEALTH CLOUD',
    description: 'Designing trust into a patient-facing app for home health care — breaking out of platform templates.',
    route: '/health-cloud',
  },
  {
    image: {
      src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
      bg: '#6EB5FF',
      panel: '#8DC4FF',
    },
    title: 'LIFE SCIENCES',
    description: 'Four parallel workstreams — from HCP provider cards to an industry-agnostic events platform.',
    route: '/life-sciences',
  },
];
