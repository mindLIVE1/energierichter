import FeatureImageSection from './FeatureImageSection.astro';

export default {
  component: FeatureImageSection,
  title: 'Sections/FeatureImageSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'State of the Art Technology',
    description: 'We use the latest tools to analyze your data.',
    imagePath: '/placeholder.jpg'
  },
};
