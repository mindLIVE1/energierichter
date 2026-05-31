import ProcessTimelineSection from './ProcessTimelineSection.astro';

export default {
  component: ProcessTimelineSection,
  title: 'Sections/ProcessTimelineSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Our Process',
    subtitle: 'Simple steps to save money.',
    items: [
      { title: 'Analysis', description: 'We analyze your current contracts.' },
      { title: 'Comparison', description: 'We find the best tariffs for you.' },
      { title: 'Switch', description: 'We handle the paperwork.' }
    ]
  },
};
