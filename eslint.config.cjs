import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig({
  root: true,
  parser: tsParser,
  plugins: {
    "@typescript-eslint": tsPlugin,
    react: pluginReact
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
});