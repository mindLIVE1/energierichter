import GlossarSection from './GlossarSection.astro';

export default {
  component: GlossarSection,
  title: 'Sections/GlossarSection',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    terms: [
      { data: { title: 'Base Load', description: 'Minimum power requirement.', letter: 'B' }, slug: 'base-load' }
    ]
  },
};
