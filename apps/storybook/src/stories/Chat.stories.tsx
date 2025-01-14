import type { Meta, StoryObj } from '@storybook/react';
import Chat from '../../../client/src/components/chat/chat';

const meta = {
  title: 'Components/Chats',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof Chat>;

export const SystemMessage: Story = {
  args: {
    role: 'system',
    children: '안녕하세요! 무엇을 도와드릴까요?',
  },
};

export const UserMessage: Story = {
  args: {
    role: 'user',
    children: '수시전형이 궁금해요',
  },
};
