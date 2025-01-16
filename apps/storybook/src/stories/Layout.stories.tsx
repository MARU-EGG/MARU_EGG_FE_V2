import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../../client/src/components/header/header';
import Layout from '../../../client/src/components/layout/layout';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Layout>
      <Header />
    </Layout>
  ),
};
