import sortRequires from "eslint-plugin-sort-requires";
import stylelintConfig from "eslint-config-stylelint";
import stylelintJestConfig from "eslint-config-stylelint/jest";

export default [
  ...stylelintConfig,
  ...stylelintJestConfig,
  {
    plugins: {
      "sort-requires": sortRequires
    },
    languageOptions: {
      globals: {
        testRule: "readonly",
        testRuleConfigs: "readonly"
      }
    },
    rules: {
      eqeqeq: "error",
      "no-use-before-define": ["error", { functions: false }],
      "sort-requires/sort-requires": "error",
      strict: "off",
      "arrow-spacing": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": "error",
      "template-curly-spacing": "error"
    }
  }
];
