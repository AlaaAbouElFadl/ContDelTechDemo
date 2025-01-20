import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  pluginJs.configs.recommended,
];
