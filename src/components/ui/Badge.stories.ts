import Badge from './Badge.astro';

export default {
  component: Badge,
  title: 'UI/Badge',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    text: 'Premium',
    theme: 'brand',
  },
};
