import globals from "globals";
import pluginJs from "@eslint/js";

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
    rules: {
      "no-unused-vars": "warn",       
      "no-undef": "error",           
    },
  },
  pluginJs.configs.recommended,
];
