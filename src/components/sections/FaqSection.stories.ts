import FaqSection from './FaqSection.astro';

export default {
  component: FaqSection,
  title: 'Sections/FaqSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know.',
    faqs: [
      { question: 'Is the switch free?', answer: 'Yes, completely free.' },
      { question: 'Will my power be cut off?', answer: 'No, the transition is seamless.' }
    ]
  },
};
