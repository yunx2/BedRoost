module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-param-reassign": 0,
    "no-console": 0,
    "import/no-extraneous-dependencies": 0,
    "radix": 0,
    "no-debugger": 0,
    "consistent-return": 0,
    "react/prop-types": 0,
    "no-trailing-spaces": 0,
    "react/no-unused-state": 0,
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,
  }
};
