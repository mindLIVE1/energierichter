import Hero from './Hero.astro';

export default {
  component: Hero,
  title: 'UI/Hero',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Your Energy Partner',
    subtitle: 'Optimize your energy costs today.',
    ctaText: 'Get Started',
    ctaHref: '#',
    badge: 'NEW',
    showCta: true
  },
};
