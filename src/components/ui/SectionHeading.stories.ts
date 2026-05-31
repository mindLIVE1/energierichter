import SectionHeading from './SectionHeading.astro';

export default {
  component: SectionHeading,
  title: 'UI/SectionHeading',
  tags: ['autodocs'],
};

export const Centered = {
  args: {
    title: 'Unsere Leistungen',
    subtitle: 'Wir helfen Ihnen dabei, die besten Energietarife zu finden und begleiten Sie bei jedem Schritt.',
    label: 'Services',
    centered: true,
    light: false,
  },
};

export const LeftAligned = {
  args: {
    title: 'Warum Energierichter?',
    subtitle: 'Wir arbeiten unabhängig, transparent und immer in Ihrem besten Interesse.',
    label: 'Vorteile',
    centered: false,
    light: false,
  },
};

export const LightTheme = {
  args: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Finden Sie Antworten auf die wichtigsten Fragen rund um den Anbieterwechsel.',
    label: 'FAQ',
    centered: true,
    light: true,
  },
};
