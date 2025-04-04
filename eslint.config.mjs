import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import eslintPluginStylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 호환툴 설정
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * typescript-eslint에서 권장하는 tseslint.config()를 통해 flat config를 생성합니다.
 */
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintPluginStylistic.configs['disable-legacy'], // 스타일과 관련된 설정은 prettier로 통합합니다.
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'public/', '**/.storybook/'],
  },
  {
    name: 'global parameter settings',
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      curly: 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      radix: ['error', 'as-needed'],
    },
  },
  {
    name: 'typescript settings',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  {
    name: 'import order settings',
    files: ['**/*.ts', '**/*.tsx', 'eslint.config.mjs'],
    plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
    rules: {
      'import/order': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../*'],
              message: 'Usage of relative parent imports is not allowed. Use path alias instead.',
            },
          ],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 외부 패키지들을 가장 먼저 import합니다.
            ['^'],
            // 내부 경로별 import 순서
            ['^@krafton-soc'],
            // 상대경로로 import합니다.
            ['^\\.'],
          ],
        },
      ],
    },
  },
  {
    name: 'react settings',
    files: ['**/*.tsx'],
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-array-index-key': 'off',
      'react/jsx-no-useless-fragment': [
        'error',
        {
          // this allows <>{value}</> syntax, where value is a string or a number
          allowExpressions: true,
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['css'],
        },
      ],
    },
    settings: {
      react: {
        version: '18.2.0',
      },
    },
  }
);
