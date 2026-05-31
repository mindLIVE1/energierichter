import CtaBanner from './CtaBanner.astro';

export default {
  component: CtaBanner,
  title: 'UI/CtaBanner',
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    label: 'Nächster Schritt',
    text: 'Bereit, Ihre Energiekosten prüfen zu lassen?',
    description: 'Starten Sie mit einer unverbindlichen Tarifprüfung und erfahren Sie, ob sich ein Wechsel für Sie lohnt.',
    ctaText: 'Kostenlose Tarifprüfung starten',
    ctaHref: '/anfrage',
  },
};

export const WithSecondaryCta = {
  args: {
    label: 'Nächster Schritt',
    text: 'Bereit, Ihre Energiekosten prüfen zu lassen?',
    description: 'Starten Sie mit einer unverbindlichen Tarifprüfung und erfahren Sie, ob sich ein Wechsel für Sie lohnt.',
    ctaText: 'Kostenlose Tarifprüfung starten',
    ctaHref: '/anfrage',
    secondaryCtaText: 'Ablauf ansehen →',
    secondaryCtaHref: '/leistungen',
  },
};
