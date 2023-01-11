module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  root: true,
  rules: {
    /**
     * Eslint config
     */

    'camelcase': 'warn',
    'consistent-this': 'warn',
    'line-comment-position': 'warn',
    'no-inline-comments': 'warn',
    'no-useless-constructor': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',

    /* Automatically fixable */
    'arrow-body-style': 'warn',
    'eqeqeq': 'warn',
    'lines-between-class-members': 'warn',
    'no-lonely-if': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'operator-assignment': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'spaced-comment': 'warn',

    /**
     * Typescript-eslint config
     */

    /* Automatically fixable */
    '@typescript-eslint/array-type': 'warn',

    /**
     * Prettier config
     */

    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 100,
        quoteProps: 'consistent',
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
  },
};
