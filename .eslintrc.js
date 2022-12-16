module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        'd.ts': 'never',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          'd.ts',
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-useless-catch': 'off',
    'react/jsx-boolean-value': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', '@types', 'src/'],
      },
      typescript: {},
    },
  },
};
