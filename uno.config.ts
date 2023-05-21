// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
    presets: [
        presetUno(),
        presetWind(),
      ],
})