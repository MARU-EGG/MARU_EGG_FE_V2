import type { Meta, StoryObj } from '@storybook/react';
import FlyoutMenus from '../../../client/src/components/flyout/flyout-menus';

const MENU_ITEMS = [
  {
    label: '학생부교과',
    children: [
      '학교장추천전형',
      '교과면접전형',
      '기회균형전형',
      '특성화고교전형',
      '만학도전형',
      '특성화고등졸재직자전형',
      '특수교육대상자전형',
    ],
  },
  {
    label: '학생부종합',
    children: ['명지인재면접전형', '명지인재서류전형', '크리스천리더전형', '사회적배려대상자전형', '농어촌학생전형'],
  },
  {
    label: '실시/실적',
    children: ['실기우수자전형', '특기자-문학/체육전형'],
  },
];

const meta = {
  title: 'Components/FlyoutMenus',
  component: FlyoutMenus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    menus: {
      control: false,
      description: 'Flyout 메뉴에 들어갈 객체 구조입니다',
    },
  },
} satisfies Meta<typeof FlyoutMenus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: MENU_ITEMS, // 직접 menus prop 전달
  },
};
