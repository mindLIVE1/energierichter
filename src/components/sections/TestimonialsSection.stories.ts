import TestimonialsSection from './TestimonialsSection.astro';

export default {
  component: TestimonialsSection,
  title: 'Sections/TestimonialsSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'What Our Clients Say',
    subtitle: 'Trusted by over 500 companies.',
    testimonials: [
      { quote: 'Great service!', name: 'Anna Schmidt', role: 'Manager' },
      { quote: 'Highly recommended.', name: 'Tom Meier', role: 'Owner' }
    ]
  },
};
