module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // plugins: ['prettier'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "newline-per-chained-call": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                allowSingleExtends: true
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_" // https://github.com/typescript-eslint/typescript-eslint/issues/1054
            }
        ],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": true }],
        "@typescript-eslint/no-shadow": ["warn"]
  }
}
