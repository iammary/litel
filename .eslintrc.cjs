module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:lit/recommended",
    "plugin:storybook/recommended",
    "plugin:unicorn/recommended",
    "plugin:wc/recommended",
    "plugin:wc/best-practice",
    "plugin:lit-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "wc", "lit", "lit-a11y", "sort-imports-es6-autofix", "import"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/no-default-export": "error",
    "unicorn/template-indent": "off",
    "unicorn/no-console-spaces": "off",
    "unicorn/prevent-abbreviations": "off",
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["**/*.stories.ts*", "**/*.config.ts*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/*.test.ts*"],
      rules: {
       "@typescript-eslint/ban-ts-comment": "off"
      },
    },
  ],
  ignorePatterns: ["!.*", "dist", "node_modules", "coverage"],
};
