import Testimonial from './Testimonial.astro';

export default {
  component: Testimonial,
  title: 'UI/Testimonial',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    quote: 'Energierichter saved us 20% on our annual energy bills. Their service is outstanding.',
    name: 'Hans Müller',
    role: 'CEO, TechGmbH',
    rating: 5
  },
};
