module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    'XMLHttpRequest': true,
    'FormData':true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    "no-obj-calls": "off",
    "no-new":"off",
    "no-unused-vars":"off",
    "no-useless-concat":"off",
    // allow debugger during development
    // 'no-debugger':  2
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
