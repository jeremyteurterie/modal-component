import { Modal } from '../components/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Modal',
  },
};

export const Secondary = {
  args: {
    label: 'Modal',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Modal',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Modal',
  },
};
