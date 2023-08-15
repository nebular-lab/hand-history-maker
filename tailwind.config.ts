import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'accent-green': '#00AC8D',
      'dark-accent-green': '#009E7F',
      'action-border': '#726C6C',
      'position': '#262C34',
      'club': '#09AB28',
      'spade': '#505050',
      'diamond': '#2839C4',
      'heart': '#AD0F05',
      'fold': '#0A92CF',
      'callCheck': '#5BAC56',
      'small': '#F06200',
      'medium': '#ED2543',
      'large': '#72008D',
      'raise':'#CD0056',
      'allin':'#290550',
      'bg': '#252525',
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}
export default config
