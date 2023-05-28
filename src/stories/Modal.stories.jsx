import { Modal } from '../components/Modal/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
/**
 * Storybook configuration for the Modal component.
 * More on how to set up stories at: [Storybook Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
 * @type {{
 *  title: string,
 *  component: import('../components/Modal/Modal').Modal,
 *  tags: string[],
 *  argTypes: { backgroundColor: { control: string } }
 * }}
 */
export default {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
/**
 * Story for the primary variant of the Modal component.
 * More on writing stories with args: [Storybook Writing Stories with Args](https://storybook.js.org/docs/react/writing-stories/args)
 * @type {{ args: { primary: boolean, label: string } }}
 */
export const Primary = {
  args: {
    primary: true,
    label: 'Modal',
  },
};

/**
 * Story for the secondary variant of the Modal component.
 * More on writing stories with args: [Storybook Writing Stories with Args](https://storybook.js.org/docs/react/writing-stories/args)
 * @type {{ args: { label: string } }}
 */
export const Secondary = {
  args: {
    label: 'Modal',
  },
};

/**
 * Story for the large variant of the Modal component.
 * More on writing stories with args: [Storybook Writing Stories with Args](https://storybook.js.org/docs/react/writing-stories/args)
 * @type {{ args: { size: string, label: string } }}
 */
export const Large = {
  args: {
    size: 'large',
    label: 'Modal',
  },
};

/**
 * Story for the small variant of the Modal component.
 * More on writing stories with args: [Storybook Writing Stories with Args](https://storybook.js.org/docs/react/writing-stories/args)
 * @type {{ args: { size: string, label: string } }}
 */
export const Small = {
  args: {
    size: 'small',
    label: 'Modal',
  },
};
