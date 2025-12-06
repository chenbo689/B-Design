import type { StoryObj } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: '分割线文字内容',
    },
    dashed: {
      control: 'boolean',
      description: '是否为虚线',
    },
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '分割线类型',
    },
    titlePlace: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: '文字位置（仅在带文字时有效）',
    },
  },
};

export const Default: StoryObj<typeof Divider> = {
  args: {
    type: 'horizontal',
  },
};

export const WithText: StoryObj<typeof Divider> = {
  args: {
    children: '文字分割线',
    dashed: false,
    type: 'horizontal',
    titlePlace: 'center',
  },
};

export const Dashed: StoryObj<typeof Divider> = {
  args: {
    children: '虚线分割线',
    dashed: true,
    type: 'horizontal',
    titlePlace: 'center',
  },
};

export const LeftText: StoryObj<typeof Divider> = {
  args: {
    children: '左侧文字',
    dashed: false,
    type: 'horizontal',
    titlePlace: 'left',
  },
};

export const RightText: StoryObj<typeof Divider> = {
  args: {
    children: '右侧文字',
    dashed: false,
    type: 'horizontal',
    titlePlace: 'right',
  },
};

export const Vertical: StoryObj<typeof Divider> = {
  args: {
    type: 'vertical',
  },
};

export const VerticalWithText: StoryObj<typeof Divider> = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>文本1</span>
      <Divider type="vertical" />
      <span>文本2</span>
      <Divider type="vertical" dashed />
      <span>文本3</span>
    </div>
  ),
};
