import EditorialGridSection from './EditorialGridSection.astro';

export default {
  component: EditorialGridSection,
  title: 'Sections/EditorialGridSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Insights',
    articles: [
      { data: { title: 'Solar Power Benefits', description: 'Why you should switch.', pubDate: new Date() }, slug: 'solar' }
    ]
  },
};
