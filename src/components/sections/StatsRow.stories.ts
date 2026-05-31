import StatsRow from './StatsRow.astro';

export default {
  component: StatsRow,
  title: 'Sections/StatsRow',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    items: [
      { value: '500+', label: 'Happy Clients' },
      { value: '20%', label: 'Average Savings' },
      { value: '24/7', label: 'Support' }
    ]
  },
};
