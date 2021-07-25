import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/forms'),
  ],
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  extract: {
    include: [
      '**/*.{vue,html}',
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: '#34A7E0'
      }
    }
  }
})
