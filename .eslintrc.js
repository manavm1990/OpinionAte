module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:cypress/recommended",
    "xo",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "jest"],
  rules: {
    "arrow-body-style": "warn",
    "capitalized-comments": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
  },
};
