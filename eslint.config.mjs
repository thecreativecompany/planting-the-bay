import js from '@eslint/js';

export default [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['app/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        IntersectionObserver: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      // Espree does not mark JSX component identifiers as used without the React plugin.
      // Keep the lightweight project lint focused on syntax and recommended correctness rules.
      'no-unused-vars': 'off',
    },
  },
];
