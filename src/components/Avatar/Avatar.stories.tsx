import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: '组件/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered', // 居中布局
  },
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    
  }
};
