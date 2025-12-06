#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('❌ 请提供组件名称，例如: npm run create Button');
  process.exit(1);
}

const componentName = args[0];

// 验证组件名称格式
if (!/^[A-Z][a-zA-Z]*$/.test(componentName)) {
  console.error('❌ 组件名称必须以大写字母开头，且只能包含字母');
  process.exit(1);
}

// 模板目录和目标目录
const templateDir = path.join(__dirname, 'comName-template');
const targetDir = path.join(__dirname, '..', 'src', 'components', componentName);

// 检查目标目录是否已存在
if (fs.existsSync(targetDir)) {
  console.error(`❌ 组件目录 ${targetDir} 已存在`);
  process.exit(1);
}

// 创建组件目录
fs.mkdirSync(targetDir, { recursive: true });
console.log(`✅ 创建组件目录: ${targetDir}`);

// 读取模板文件
const templateFiles = fs.readdirSync(templateDir);

// 替换规则
const replaceRules = [
  { from: 'comName', to: componentName },
  { from: 'ComName', to: componentName.charAt(0).toUpperCase() + componentName.slice(1) }
];

// 处理每个模板文件
templateFiles.forEach(templateFile => {
  const templatePath = path.join(templateDir, templateFile);
  
  // 生成目标文件名
  let targetFileName = templateFile;
  replaceRules.forEach(rule => {
    targetFileName = targetFileName.replace(rule.from, rule.to);
  });
  
  const targetPath = path.join(targetDir, targetFileName);
  
  // 读取模板内容
  let content = fs.readFileSync(templatePath, 'utf8');
  
  // 替换内容中的占位符
  replaceRules.forEach(rule => {
    const regex = new RegExp(rule.from, 'g');
    content = content.replace(regex, rule.to);
  });
  
  // 写入目标文件
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log(`✅ 创建文件: ${targetFileName}`);
});

console.log(`\n🎉 组件 ${componentName} 创建成功！`);
console.log(`📁 位置: src/components/${componentName}/`);
console.log(`\n📝 生成的文件:`);
fs.readdirSync(targetDir).forEach(file => {
  console.log(`   - ${file}`);
});

console.log(`\n🚀 使用方式:`);
console.log(`   import ${componentName} from './components/${componentName}';`);
console.log(`\n📖 查看组件文档: npm run storybook`);