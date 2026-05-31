import Card from './Card.astro';

export default {
  component: Card,
  title: 'UI/Card',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Standard Card',
  tags: ['autodocs'],
    children: 'This is a standard card with some descriptive text inside.',
  },
};

export const WithIcon = {
  args: {
    title: 'Service Card',
  tags: ['autodocs'],
    icon: '⚡',
    children: 'This card features an icon to highlight a specific service.',
  },
};

export const Highlighted = {
  args: {
    title: 'Step 1: Analysis',
  tags: ['autodocs'],
    index: 1,
    children: 'We analyze your current energy tariffs to find savings.',
  },
};
