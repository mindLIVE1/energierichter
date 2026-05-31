import BlogGridSection from './BlogGridSection.astro';

export default {
  component: BlogGridSection,
  title: 'Sections/BlogGridSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Latest News',
    articles: [
      { data: { title: 'Energy Market 2024', description: 'Trends and forecasts.', pubDate: new Date(), image: '' }, slug: 'energy-market-2024' },
      { data: { title: 'How to save power', description: '5 simple tips.', pubDate: new Date(), image: '' }, slug: 'save-power' }
    ]
  },
};
