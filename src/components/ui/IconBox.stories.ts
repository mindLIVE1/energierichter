import IconBox from './IconBox.astro';

export default {
  component: IconBox,
  title: 'UI/IconBox',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>',
    size: 'md',
    theme: 'brand'
  },
};
