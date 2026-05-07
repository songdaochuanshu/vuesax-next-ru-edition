import { ref } from 'vue';

export function useColorPicker(initialColor: string = '#7BBFC3') {
  const color = ref(initialColor);

  const setColor = (newColor: string) => {
    color.value = newColor;
    document.documentElement.style.setProperty('--vs-primary', newColor);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + [r, g, b].map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
  };

  return {
    color,
    setColor,
    hexToRgb,
    rgbToHex,
  };
}
