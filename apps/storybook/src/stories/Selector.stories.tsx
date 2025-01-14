import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Selector from '../../../client/src/components/selector/selector';

const meta = {
  title: 'Components/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Selector>
      <Selector.Header>모집요강으로 바로 이동</Selector.Header>
      <Selector.Option onClick={action('option-clicked')}>출처 1번(전형 일정)</Selector.Option>
      <Selector.Option onClick={action('option-clicked')}>출처 1번(제출 서류)</Selector.Option>
    </Selector>
  ),
};

export const Checkbox: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Selector>
      <Selector.Header>모집요강으로 바로 이동</Selector.Header>
      <Selector.Option style={'checkbox'} onClick={action('option-clicked')}>
        인문캠퍼스
      </Selector.Option>
      <Selector.Option style={'checkbox'} onClick={action('option-clicked')}>
        자연캠퍼스
      </Selector.Option>
    </Selector>
  ),
};

export const DropDown: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Selector>
      <Selector.Header>모집요강으로 바로 이동</Selector.Header>
      <Selector.Option style={'dropDown'} onClick={action('option-clicked')}>
        여기를 눌러주세요
      </Selector.Option>
    </Selector>
  ),
};
