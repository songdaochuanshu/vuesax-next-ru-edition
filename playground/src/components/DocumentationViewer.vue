<template>
  <div class="documentation-viewer">
    <div class="doc-header">
      <h1>{{ title }}</h1>
      <p v-if="description" class="doc-description">{{ description }}</p>
    </div>

    <div class="doc-nav">
      <div class="doc-nav-header">目录</div>
      <nav class="doc-toc">
        <a
          v-for="heading in tableOfContents"
          :key="heading.id"
          :href="`#${heading.id}`"
          class="doc-toc-item"
          :style="{ paddingLeft: `${(heading.level - 2) * 16}px` }"
        >
          {{ heading.text }}
        </a>
      </nav>
    </div>

    <div class="doc-content">
      <div v-html="renderedContent" class="markdown-body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/+esm';

interface Props {
  title: string;
  description?: string;
  content: string;
}

const props = defineProps<Props>();

interface Heading {
  level: number;
  text: string;
  id: string;
}

const tableOfContents = ref<Heading[]>([]);

const renderedContent = computed(() => {
  const html = marked(props.content);
  
  // 提取标题用于目录
  const headings: Heading[] = [];
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  tempDiv.querySelectorAll('h2, h3, h4').forEach((heading) => {
    const level = parseInt(heading.tagName[1]);
    const text = heading.textContent || '';
    const id = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    
    heading.id = id;
    headings.push({ level, text, id });
  });
  
  tableOfContents.value = headings;
  return tempDiv.innerHTML;
});
</script>

<style scoped lang="scss">
.documentation-viewer {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }
}

.doc-header {
  grid-column: 1 / -1;
  margin-bottom: 20px;

  h1 {
    margin: 0 0 12px 0;
    font-size: 32px;
    font-weight: 700;
    color: var(--vs-primary);
  }
}

.doc-description {
  margin: 0;
  font-size: 16px;
  color: #7F8C8D;
}

.doc-nav {
  position: sticky;
  top: 20px;
  height: fit-content;
  border: 1px solid #E8EAED;
  border-radius: 8px;
  background: white;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4B5563;
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

.doc-nav-header {
  padding: 16px;
  font-weight: 600;
  border-bottom: 1px solid #E8EAED;
  color: var(--vs-text-primary);

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4B5563;
  }
}

.doc-toc {
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow-y: auto;
}

.doc-toc-item {
  padding: 8px 16px;
  color: #7F8C8D;
  text-decoration: none;
  font-size: 14px;
  transition: all 250ms;
  border-left: 3px solid transparent;

  &:hover {
    color: var(--vs-primary);
    background: rgba(123, 191, 195, 0.05);
    border-left-color: var(--vs-primary);
  }

  &.active {
    color: var(--vs-primary);
    background: rgba(123, 191, 195, 0.1);
    border-left-color: var(--vs-primary);
    font-weight: 600;
  }
}

.doc-content {
  min-width: 0;
}

.markdown-body {
  font-size: 16px;
  line-height: 1.6;
  color: var(--vs-text-primary);

  h2 {
    margin: 32px 0 16px 0;
    padding-top: 24px;
    border-top: 1px solid #E8EAED;
    font-size: 24px;
    font-weight: 700;
    color: var(--vs-primary);

    @media (prefers-color-scheme: dark) {
      border-top-color: #4B5563;
    }

    &:first-child {
      border-top: none;
      padding-top: 0;
    }
  }

  h3 {
    margin: 24px 0 12px 0;
    font-size: 20px;
    font-weight: 600;
    color: var(--vs-text-primary);
  }

  h4 {
    margin: 16px 0 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--vs-text-primary);
  }

  p {
    margin: 12px 0;
  }

  ul,
  ol {
    margin: 16px 0;
    padding-left: 24px;
  }

  li {
    margin: 8px 0;
  }

  table {
    width: 100%;
    margin: 16px 0;
    border-collapse: collapse;
    border: 1px solid #E8EAED;
    border-radius: 8px;
    overflow: hidden;

    @media (prefers-color-scheme: dark) {
      border-color: #4B5563;
    }

    th {
      padding: 12px 16px;
      background: #F5F7F8;
      font-weight: 600;
      text-align: left;
      border-bottom: 1px solid #E8EAED;

      @media (prefers-color-scheme: dark) {
        background: #2D3748;
        border-bottom-color: #4B5563;
      }
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid #E8EAED;

      @media (prefers-color-scheme: dark) {
        border-bottom-color: #4B5563;
      }
    }

    tr:last-child td {
      border-bottom: none;
    }
  }

  code {
    padding: 2px 6px;
    background: #F5F7F8;
    border-radius: 4px;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    color: #CF4647;

    @media (prefers-color-scheme: dark) {
      background: #2D3748;
      color: #E08A5E;
    }
  }

  pre {
    padding: 16px;
    background: #2C3E50;
    border-radius: 8px;
    overflow-x: auto;
    margin: 16px 0;

    code {
      padding: 0;
      background: none;
      color: #E8EAED;
      font-size: 13px;
    }
  }

  blockquote {
    padding: 12px 16px;
    margin: 16px 0;
    border-left: 4px solid var(--vs-primary);
    background: rgba(123, 191, 195, 0.05);
    border-radius: 4px;

    p {
      margin: 0;
    }
  }

  a {
    color: var(--vs-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 16px 0;
  }

  hr {
    margin: 32px 0;
    border: none;
    border-top: 1px solid #E8EAED;

    @media (prefers-color-scheme: dark) {
      border-top-color: #4B5563;
    }
  }
}

@media (max-width: 640px) {
  .documentation-viewer {
    padding: 16px;
    gap: 16px;
  }

  .doc-header h1 {
    font-size: 24px;
  }

  .markdown-body {
    font-size: 14px;

    h2 {
      font-size: 20px;
      margin: 24px 0 12px 0;
    }

    h3 {
      font-size: 16px;
    }

    pre {
      padding: 12px;
      font-size: 11px;
    }
  }
}
</style>
