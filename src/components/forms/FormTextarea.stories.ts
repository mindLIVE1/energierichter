import FormTextarea from './FormTextarea.astro';

export default {
  component: FormTextarea,
  title: 'Forms/FormTextarea',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    name: 'message',
    label: 'Your Message',
    placeholder: 'How can we help you?',
    required: true,
    rows: 4
  },
};
