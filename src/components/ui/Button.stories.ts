import Button from './Button.astro';

export default {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'md',
    href: '#',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'md',
    href: '#',
    children: 'Secondary Button',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    size: 'md',
    href: '#',
    children: 'Outline Button',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'md',
    href: '#',
    children: 'Ghost Button',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'sm',
    href: '#',
    children: 'Small Button',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'lg',
    href: '#',
    children: 'Large Button',
  },
};
