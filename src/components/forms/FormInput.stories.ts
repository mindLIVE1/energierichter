import FormInput from './FormInput.astro';

export default {
  component: FormInput,
  title: 'Forms/FormInput',
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    name: 'email',
    type: 'email',
    label: 'E-Mail Address',
    placeholder: 'max@mustermann.de',
    required: true
  },
};
