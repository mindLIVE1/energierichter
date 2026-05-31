import Footer from './Footer.astro';

export default {
  component: Footer,
  title: 'Layout/Footer',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isTerminPage: false,
  },
};

export const TerminPageFooter = {
  args: {
    isTerminPage: true,
  },
};
