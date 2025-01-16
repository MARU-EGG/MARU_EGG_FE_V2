import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./src/**/*.tsx', '../../apps/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeout: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
      },
      animation: {
        fadein: 'fadein 0.25s',
        fadeout: 'fadeout 0.25s',
        slideUp: 'slideUp 0.25s ease-out',
        slideDown: 'slideDown 0.25s ease-out',
      },
    },
  },
};

export default config;
