<template>
  <div class="color-picker">
    <div class="picker-header">
      <h3>实时调色板</h3>
      <div class="color-display">
        <div class="color-preview" :style="{ backgroundColor: color }"></div>
        <input
          v-model="color"
          type="text"
          class="color-input"
          placeholder="#7BBFC3"
          @input="updateColor"
        />
      </div>
    </div>

    <div class="picker-body">
      <div class="slider-group">
        <label>拖动调整主色</label>
        <input
          type="range"
          min="0"
          max="360"
          :value="hue"
          class="hue-slider"
          @input="updateFromHue"
        />
        <div class="hue-gradient"></div>
      </div>

      <div class="presets">
        <h4>预设色彩</h4>
        <div class="preset-list">
          <button
            v-for="preset in presets"
            :key="preset.color"
            class="preset-btn"
            :style="{ backgroundColor: preset.color }"
            :title="preset.name"
            @click="setColor(preset.color)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useColorPicker } from '../composables/useColorPicker';

const { color, setColor, hexToRgb, rgbToHex } = useColorPicker();

const hue = ref(200);

const presets = [
  { name: '天青', color: '#7BBFC3' },
  { name: '粉青', color: '#90B44B' },
  { name: '琥珀', color: '#E08A5E' },
  { name: '釉红', color: '#CF4647' },
  { name: '月白', color: '#F5F7F8' },
  { name: '深灰', color: '#2C3E50' },
];

const updateColor = () => {
  if (color.value.match(/^#[0-9A-F]{6}$/i)) {
    setColor(color.value);
  }
};

const updateFromHue = (e: Event) => {
  const target = e.target as HTMLInputElement;
  hue.value = parseInt(target.value);
  
  // 简单的 HSL 到 RGB 转换
  const h = hue.value;
  const s = 60;
  const l = 60;
  
  const c = ((100 - Math.abs(2 * l - 100)) * s) / 100;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l / 100 - c / 2;
  
  let r, g, b;
  
  if (h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (h < 180) {
    [r, g, b] = [0, c, x];
  } else if (h < 240) {
    [r, g, b] = [0, x, c];
  } else if (h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  
  const rr = Math.round((r + m) * 255);
  const gg = Math.round((g + m) * 255);
  const bb = Math.round((b + m) * 255);
  
  const hex = rgbToHex(rr, gg, bb);
  color.value = hex;
  setColor(hex);
};
</script>

<style scoped lang="scss">
.color-picker {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.picker-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E8EAED;
}

.picker-header h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #2C3E50;
}

.color-display {
  display: flex;
  gap: 12px;
  align-items: center;
}

.color-preview {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid #E8EAED;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #E8EAED;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Courier New', monospace;
  transition: border-color 250ms;

  &:focus {
    outline: none;
    border-color: var(--vs-primary);
    box-shadow: 0 0 0 3px rgba(123, 191, 195, 0.1);
  }
}

.picker-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.slider-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slider-group label {
  font-size: 13px;
  font-weight: 500;
  color: #7F8C8D;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hue-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
  -webkit-appearance: none;
  appearance: none;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 3px solid var(--vs-primary);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 150ms;

    &:hover {
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 3px solid var(--vs-primary);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 150ms;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.hue-gradient {
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
  opacity: 0.3;
}

.presets {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.presets h4 {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #7F8C8D;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.preset-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.preset-btn {
  aspect-ratio: 1;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 150ms;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }
}

@media (max-width: 640px) {
  .color-picker {
    padding: 16px;
  }

  .preset-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
