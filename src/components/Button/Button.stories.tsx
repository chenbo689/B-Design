import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: '组件/Button',
  component: Button,
  parameters: {
    layout: 'centered', // 居中布局
  },
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    variant: {
      control: { type: 'select' }, // 变体控制类型为选择器
      options: ['primary', 'secondary', 'success', 'warning', 'danger'], // 变体选项
      description: '按钮样式变体', // 选项描述
    },
    size: {
      control: { type: 'select' }, // 尺寸控制类型为选择器
      options: ['small', 'medium', 'large'], // 尺寸选项
      description: '按钮尺寸',
    },
    disabled: {
      control: { type: 'boolean' }, // 禁用状态控制类型为布尔值
      description: '是否禁用按钮',
    },
    loading: {
      control: { type: 'boolean' }, // 加载状态控制类型为布尔值
      description: '是否显示加载状态',
    },
    type: {
      control: { type: 'select' }, // 按钮类型控制类型为选择器
      options: ['button', 'submit', 'reset'], // 按钮类型选项
      description: '原生按钮类型',
    },
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// 基础按钮变体
export const 主要按钮: Story = {
  args: {
    variant: 'primary',
    children: '主要按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '主要按钮：用于最重要的操作，具有最显眼的视觉效果。'
      }
    }
  }
};

export const 次要按钮: Story = {
  args: {
    variant: 'secondary',
    children: '次要按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '次要按钮：用于次要操作，视觉效果较为低调。'
      }
    }
  }
};

export const 成功按钮: Story = {
  args: {
    variant: 'success',
    children: '成功按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '成功按钮：用于表示成功的操作或确认。'
      }
    }
  }
};

export const 警告按钮: Story = {
  args: {
    variant: 'warning',
    children: '警告按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '警告按钮：用于需要用户注意的操作。'
      }
    }
  }
};

export const 危险按钮: Story = {
  args: {
    variant: 'danger',
    children: '危险按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '危险按钮：用于表示危险或破坏性操作，如删除。'
      }
    }
  }
};

// 尺寸变体
export const 小尺寸: Story = {
  args: {
    size: 'small',
    children: '小按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '小尺寸按钮：适用于空间有限的场景。'
      }
    }
  }
};

export const 中尺寸: Story = {
  args: {
    size: 'medium',
    children: '中按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '中尺寸按钮：默认尺寸，适用于大多数场景。'
      }
    }
  }
};

export const 大尺寸: Story = {
  args: {
    size: 'large',
    children: '大按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '大尺寸按钮：用于需要突出显示的重要操作。'
      }
    }
  }
};

// 状态变体
export const 禁用状态: Story = {
  args: {
    disabled: true,
    children: '禁用按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '禁用状态按钮：表示当前不可执行操作。'
      }
    }
  }
};

export const 加载状态: Story = {
  args: {
    loading: true,
    children: '加载按钮',
  },
  parameters: {
    docs: {
      description: {
        story: '加载状态按钮：表示操作正在进行中。'
      }
    }
  }
};

// 组合示例
export const 所有变体组合: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button size="small" variant="primary">小主要按钮</Button>
        <Button size="medium" variant="primary">中主要按钮</Button>
        <Button size="large" variant="primary">大主要按钮</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button variant="secondary">次要按钮</Button>
        <Button variant="success">成功按钮</Button>
        <Button variant="warning">警告按钮</Button>
        <Button variant="danger">危险按钮</Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Button disabled>禁用按钮</Button>
        <Button loading>加载按钮</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '展示按钮所有变体和状态的组合效果。'
      }
    }
  }
};

// 交互示例
export const 点击交互: Story = {
  args: {
    children: '点击我',
    onClick: () => alert('按钮被点击了！'),
  },
  parameters: {
    docs: {
      description: {
        story: '带点击事件的按钮示例。'
      }
    }
  }
};