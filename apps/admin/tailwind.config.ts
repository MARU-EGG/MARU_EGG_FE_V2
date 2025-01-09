import sharedConfig from '@repo/tailwind-config';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [sharedConfig],
};

export default config;
