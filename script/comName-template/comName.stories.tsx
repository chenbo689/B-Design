import type { Meta, StoryObj } from '@storybook/react';
import comName from './comName';

const meta: Meta<typeof comName> = {
  title: '组件/comName',
  component: comName,
  parameters: {
    layout: 'centered', // 居中布局
  },
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    
  }
};
