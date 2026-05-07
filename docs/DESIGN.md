# 汝窑美学设计规范

## 设计理念

Vuesax-Next (Ru Edition) 融合了现代 UI 设计与东方美学，以汝窑陶瓷为灵感，创造出低饱和度、高质感的设计系统。

### 核心价值观

- **东方美学** - 融入中国传统美学元素
- **简洁优雅** - 去除繁复，保留本质
- **高质感** - 通过细节打磨提升品质感
- **可用性** - 在美学基础上确保易用性

---

## 色彩系统

### 汝窑色彩

汝窑色彩系统由五种主要颜色组成，每种颜色都代表不同的含义：

| 色彩名称 | 十六进制 | RGB | 含义 | 用途 |
|---------|---------|-----|------|------|
| **天青** | `#7BBFC3` | (123, 191, 195) | 宁静致远 | Primary 主色，用于重要操作 |
| **粉青** | `#90B44B` | (144, 180, 75) | 生机活力 | Success 成功色，表示正面反馈 |
| **琥珀** | `#E08A5E` | (224, 138, 94) | 温暖沉稳 | Warning 警告色，提示用户注意 |
| **釉红** | `#CF4647` | (207, 70, 71) | 警醒有力 | Danger 危险色，表示错误或危险 |
| **月白** | `#F5F7F8` | (245, 247, 248) | 纯净无瑕 | Background 背景色，营造空间感 |

### 色彩应用规则

#### Primary（天青）应用场景

- 主要按钮
- 链接文本
- 表单焦点状态
- 活跃导航项
- 重要信息高亮

```css
.primary-button {
  background: #7BBFC3;
  color: white;
}

.primary-text {
  color: #7BBFC3;
}
```

#### Success（粉青）应用场景

- 成功提示
- 验证通过
- 完成状态
- 正面反馈

```css
.success-alert {
  border-left: 4px solid #90B44B;
  background: rgba(144, 180, 75, 0.1);
  color: #90B44B;
}
```

#### Warning（琥珀）应用场景

- 警告提示
- 需要注意的信息
- 即将过期
- 建议操作

```css
.warning-badge {
  background: #E08A5E;
  color: white;
}
```

#### Danger（釉红）应用场景

- 错误提示
- 删除操作
- 危险操作
- 系统错误

```css
.danger-button {
  background: #CF4647;
  color: white;
}
```

#### Background（月白）应用场景

- 页面背景
- 卡片背景
- 容器背景
- 空白区域

```css
.page-background {
  background: #F5F7F8;
}
```

### 辅助色彩

| 色彩 | 十六进制 | 用途 |
|------|---------|------|
| 深灰 | `#2C3E50` | 文本主色 |
| 中灰 | `#7F8C8D` | 文本次色 |
| 浅灰 | `#BDC3C7` | 文本弱色 |
| 边框灰 | `#E8EAED` | 边框色 |
| 深色背景 | `#1F2937` | 深色模式背景 |

---

## 排版系统

### 字体选择

- **中文** - 系统默认字体（-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto）
- **英文** - 相同系统字体
- **等宽** - Menlo, Monaco, "Courier New"

### 字体尺寸

| 用途 | 尺寸 | 行高 | 使用场景 |
|------|------|------|---------|
| 超大标题 | 32px | 1.2 | 页面主标题 |
| 大标题 | 24px | 1.3 | 模块标题 |
| 标题 | 20px | 1.4 | 卡片标题 |
| 副标题 | 18px | 1.4 | 小标题 |
| 正文 | 16px | 1.6 | 主要内容 |
| 小正文 | 14px | 1.6 | 次要内容 |
| 标签 | 12px | 1.5 | 标签、徽章 |
| 超小 | 11px | 1.5 | 提示文本 |

### 字体权重

| 权重 | 值 | 用途 |
|------|-----|------|
| Light | 300 | 辅助信息 |
| Normal | 400 | 正文 |
| Medium | 500 | 强调 |
| Semibold | 600 | 标题、按钮 |
| Bold | 700 | 重点标题 |

### 排版规范

```css
/* 标题 */
h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

/* 正文 */
p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 16px;
}

/* 标签 */
.label {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
}
```

---

## 间距系统

采用 4px 基础网格系统：

| 变量 | 值 | 用途 |
|------|-----|------|
| xs | 4px | 极小间距 |
| sm | 8px | 小间距 |
| md | 12px | 中间距 |
| lg | 16px | 大间距 |
| xl | 24px | 超大间距 |

### 应用规则

```css
/* 内边距 */
.card {
  padding: 16px; /* lg */
}

.button {
  padding: 8px 16px; /* sm lg */
}

/* 外边距 */
.section {
  margin-bottom: 24px; /* xl */
}

/* 间隔 */
.flex-container {
  gap: 12px; /* md */
}
```

---

## 圆角系统

| 变量 | 值 | 用途 |
|------|-----|------|
| sm | 4px | 小圆角（按钮、输入框） |
| md | 8px | 中圆角（卡片、对话框） |
| lg | 12px | 大圆角（模态框、抽屉） |
| xl | 16px | 超大圆角（大型容器） |

### 应用规则

```css
/* 按钮 */
.button {
  border-radius: 4px;
}

/* 卡片 */
.card {
  border-radius: 8px;
}

/* 模态框 */
.modal {
  border-radius: 12px;
}

/* 大型容器 */
.container {
  border-radius: 16px;
}
```

---

## 阴影系统

| 等级 | 值 | 用途 |
|------|-----|------|
| sm | 0 1px 2px rgba(0, 0, 0, 0.05) | 微妙阴影 |
| md | 0 4px 6px rgba(0, 0, 0, 0.1) | 标准阴影 |
| lg | 0 10px 15px rgba(0, 0, 0, 0.1) | 浮起阴影 |
| xl | 0 20px 25px rgba(0, 0, 0, 0.15) | 深层阴影 |

### 应用规则

```css
/* 微妙阴影 - 用于小元素 */
.badge {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* 标准阴影 - 用于卡片 */
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 浮起阴影 - 用于悬停状态 */
.button:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* 深层阴影 - 用于模态框 */
.modal {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

---

## 过渡和动画

### 过渡时间

| 类型 | 时间 | 用途 |
|------|------|------|
| Fast | 150ms | 快速交互（hover） |
| Base | 250ms | 标准过渡 |
| Slow | 350ms | 缓慢过渡 |

### 缓动函数

- **ease-out** - 默认，用于大多数过渡
- **ease-in-out** - 用于复杂动画
- **linear** - 用于连续动画

### 动画规范

```css
/* 标准过渡 */
.button {
  transition: all 250ms ease-out;
}

/* 快速交互 */
.button:hover {
  transition: all 150ms ease-out;
}

/* 进入动画 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal {
  animation: slideIn 300ms ease-out;
}
```

---

## 组件设计原则

### 1. 一致性

所有组件遵循统一的设计语言：

- 统一的色彩系统
- 统一的间距规范
- 统一的圆角系统
- 统一的阴影系统

### 2. 可用性

- 清晰的视觉层级
- 充分的对比度
- 易于理解的交互
- 无障碍支持

### 3. 反馈

每个交互都应该有明确的反馈：

- 悬停状态
- 点击状态
- 加载状态
- 错误状态
- 成功状态

### 4. 响应式

所有组件都应该支持响应式设计：

- 移动端友好
- 平板端适配
- 桌面端优化

---

## 状态设计

### 按钮状态

```css
/* 默认状态 */
.button {
  background: #7BBFC3;
  color: white;
  cursor: pointer;
}

/* 悬停状态 */
.button:hover {
  box-shadow: 0 4px 12px rgba(123, 191, 195, 0.3);
}

/* 活跃状态 */
.button:active {
  transform: scale(0.98);
}

/* 禁用状态 */
.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 加载状态 */
.button.loading {
  pointer-events: none;
  opacity: 0.8;
}
```

### 表单状态

```css
/* 默认状态 */
.input {
  border: 1px solid #E8EAED;
  background: white;
}

/* 焦点状态 */
.input:focus {
  border-color: #7BBFC3;
  box-shadow: 0 0 0 3px rgba(123, 191, 195, 0.1);
}

/* 成功状态 */
.input.success {
  border-color: #90B44B;
  background: rgba(144, 180, 75, 0.05);
}

/* 错误状态 */
.input.error {
  border-color: #CF4647;
  background: rgba(207, 70, 71, 0.05);
}

/* 禁用状态 */
.input:disabled {
  background: #F5F7F8;
  color: #BDC3C7;
  cursor: not-allowed;
}
```

---

## 深色模式

深色模式遵循以下原则：

1. **背景色** - 使用深色背景（#1F2937）
2. **文本色** - 使用浅色文本（#E8EAED）
3. **对比度** - 保持足够的对比度（WCAG AA 标准）
4. **色彩** - 保持汝窑色彩系统的一致性

```css
@media (prefers-color-scheme: dark) {
  :root {
    --vs-bg: #1F2937;
    --vs-text-primary: #E8EAED;
    --vs-text-secondary: #A8AEB5;
    --vs-border: #374151;
  }

  .card {
    background: #374151;
    color: var(--vs-text-primary);
  }
}
```

---

## 无障碍设计

### 键盘导航

所有交互元素都应该支持键盘导航：

```css
/* 焦点指示器 */
:focus-visible {
  outline: 2px solid #7BBFC3;
  outline-offset: 2px;
}
```

### 颜色对比度

确保文本与背景的对比度符合 WCAG AA 标准（至少 4.5:1）：

```css
/* 好的对比度 */
.text {
  color: #2C3E50;      /* 深灰 */
  background: #F5F7F8; /* 月白 */
  /* 对比度: 13.5:1 ✓ */
}

/* 不好的对比度 */
.text {
  color: #7BBFC3;      /* 天青 */
  background: #F5F7F8; /* 月白 */
  /* 对比度: 2.8:1 ✗ */
}
```

### 语义化 HTML

使用语义化的 HTML 标签：

```html
<!-- 好的做法 -->
<button>点击我</button>
<label for="email">邮箱</label>
<input id="email" type="email" />

<!-- 不好的做法 -->
<div role="button">点击我</div>
<div>邮箱</div>
<div contenteditable></div>
```

---

## 设计检查清单

在设计或开发新组件时，请检查以下项目：

- [ ] 遵循汝窑色彩系统
- [ ] 使用正确的字体尺寸和权重
- [ ] 遵循间距规范
- [ ] 使用正确的圆角
- [ ] 添加适当的阴影
- [ ] 实现所有状态（默认、悬停、活跃、禁用）
- [ ] 支持响应式设计
- [ ] 支持深色模式
- [ ] 支持键盘导航
- [ ] 确保颜色对比度
- [ ] 添加过渡和动画
- [ ] 提供完整的文档

---

## 参考资源

- [汝窑瓷器](https://zh.wikipedia.org/wiki/汝窑)
- [WCAG 无障碍指南](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design](https://material.io/design)
- [Ant Design](https://ant.design/)

---

**设计规范版本**: 1.0.0  
**最后更新**: 2026-05-08
