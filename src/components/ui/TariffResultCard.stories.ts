import TariffResultCard from './TariffResultCard.astro';

export default {
  component: TariffResultCard,
  title: 'UI/TariffResultCard',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Premium Eco',
    price: '0.28',
    basePrice: '12.50',
    savings: '150',
    benefits: ['100% Green Energy', 'Price Guarantee 12 Months', 'No hidden fees'],
    isHighlighted: true
  },
};
