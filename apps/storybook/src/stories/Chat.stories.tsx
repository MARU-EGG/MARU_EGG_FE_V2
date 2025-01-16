import type { Meta, StoryObj } from '@storybook/react';
import Chat from '../../../client/src/components/chat/chat';

const meta = {
  title: 'Components/Chats',
  component: Chat,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof Chat>;

export const SystemMessage: Story = {
  args: {
    role: 'system',
    children:
      '안녕하세요,\n명지대학교 입시 정보를 똑똑하게\n찾아주는 마루에그입니다!\n\n명지대학교 입시에 대해 궁금하신가요?\n아래 전형 중 하나를 선택해주세요!',
  },
};

export const UserMessage: Story = {
  args: {
    role: 'user',
    children: '수시전형이 궁금해요',
  },
};
