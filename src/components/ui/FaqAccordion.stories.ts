import FaqAccordion from './FaqAccordion.astro';

export default {
  component: FaqAccordion,
  title: 'UI/FaqAccordion',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    items: [
      { question: 'What is Energierichter?', answer: 'We are energy consultants.' },
      { question: 'How much does it cost?', answer: 'Our initial consultation is free.' }
    ]
  },
};
