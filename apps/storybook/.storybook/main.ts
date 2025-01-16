import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';
import { mergeConfig } from 'vite';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-postcss'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          { find: '@', replacement: resolve(__dirname, '../../client/src') },
          { find: '@assets', replacement: resolve(__dirname, '../../client/src/assets') },
          { find: '@components', replacement: resolve(__dirname, '../../client/src/components') },
          { find: '@constants', replacement: resolve(__dirname, '../../client/src/constants') },
          { find: '@hooks', replacement: resolve(__dirname, '../../client/src/hooks') },
          { find: '@page', replacement: resolve(__dirname, '../../client/src/page') },
          { find: '@stores', replacement: resolve(__dirname, '../../client/src/stores') },
          { find: '@types', replacement: resolve(__dirname, '../../client/src/types') },
          { find: '@utils', replacement: resolve(__dirname, '../../client/src/utils') },
        ],
      },
    });
  },
};

export default config;
