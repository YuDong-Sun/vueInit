module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'off',
    quotes: ['error', 'single'],
    'no-extra-parens': ['off'],
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    indent: 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1
      }
    ],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'generator-star-spacing': ['error', { before: true, after: false }],
    'object-shorthand': ['error', 'always'],
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'always'],
    'yield-star-spacing': ['error', 'after'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-irregular-whitespace': [
      'warn',
      {
        skipComments: true,
        skipTemplates: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue']
};
