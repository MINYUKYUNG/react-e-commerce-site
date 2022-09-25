module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react", 
    "@typescript-eslint",
    "jsx-a11y",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-extra-semi": "off",
  },
};