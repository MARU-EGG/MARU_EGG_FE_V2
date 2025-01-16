import { FlatCompat } from '@eslint/eslintrc';
import { nextJsConfig } from '@repo/eslint-config/next-js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...nextJsConfig];

export default eslintConfig;
