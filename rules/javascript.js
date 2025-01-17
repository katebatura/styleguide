const rules = {
  'prettier/prettier': 'off',
  'curly': 'error',
  'operator-linebreak': [ 'error', 'after' ],
  'semi-style': [ 'error', 'last' ],
  'semi-spacing': 'error',
  'comma-style': [ 'error', 'last' ],
  'max-len': [ 'error', { code: 120 } ],
  'keyword-spacing': [ 'error', { before: true } ],
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'space-in-parens': [ 'error', 'never' ],
  'no-new-wrappers': 'error',
  'no-new-object': 'error',
  'no-new-func': 'error',
  'prefer-template': 'error',
  'no-useless-concat': 'error',
  'no-array-constructor': 'error',
  'no-var': 'error',
  'prefer-const': 'error',
  'no-throw-literal': 'error',
  'default-case': 'error',
  'eqeqeq': [ 'error', 'smart' ],
  'func-style': [ 'error', 'declaration', { 'allowArrowFunctions': true } ],
  'prefer-arrow-callback': 'error',
  'array-callback-return': 'error',
  'indent': [ 'error', 2 ], // TODO: Rule has much more options. It's worth to adjust them.
  'no-unneeded-ternary': 'error',
  'no-restricted-syntax': [ 'error', {
    'selector': 'ExportDefaultDeclaration',
    'message': 'Prefer named exports',
  } ],
  'no-template-curly-in-string': 'error',
  'no-constructor-return': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-new': 'error',
  'no-self-compare': 'error',
  'no-useless-call': 'error',
  'semi': [ 'error', 'always' ],
  'brace-style': 'error',
  'no-redeclare': 'error',
  'no-extra-semi': 'error',
  'no-unused-vars': ['error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],
  'no-empty-function': 'error',
  'no-duplicate-imports': 'error',
  'func-call-spacing': 'error',
  'comma-dangle': [ 'error', 'always-multiline' ],
  'quotes': [ 'error', 'single' ],
  'key-spacing': 'error',
  'comma-spacing': 'error',
  'no-shadow':'error',
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: 'import',
      next: '*'
    },
    {
      blankLine: 'any',
      prev: 'import',
      next: 'import'
    }
  ],
  'deprecation/deprecation': 'warn',
  'array-bracket-spacing': [
    'error',
    'always',
  ],
  'object-curly-spacing': [
    'error',
    'always',
  ]
}

module.exports = {
  rules,
  plugins: [
    // npm i -D eslint-plugin-deprecation
    'deprecation',
  ],
  extends: [
    'eslint:recommended',
  ],
}
