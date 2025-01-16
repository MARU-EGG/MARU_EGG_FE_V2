import type { Meta, StoryObj } from '@storybook/react';
import PresetButton from '../../../client/src/components/preset-button/preset-button';

const meta = {
  title: 'Components/PresetButton',
  component: PresetButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 내부에 들어갈 콘텐츠',
    },
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 설정합니다',
    },
  },
} satisfies Meta<typeof PresetButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

export const LongText: Story = {
  args: {
    children: '텍스트 긴 버전',
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true,
  },
};
