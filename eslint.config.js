import { defineConfig } from "eslint-define-config";

export default defineConfig({
  ignorePatterns: ["dist"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // Added for accessibility and SEO
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-refresh", "jsx-a11y"], // Ensure jsx-a11y plugin is included
  env: {
    browser: true,
    es6: true, // Enable ES6 features for modern JavaScript
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off", // No need to import React with JSX transform
    "jsx-a11y/alt-text": "warn", // Enforce alternative text for images (SEO & accessibility)
    "jsx-a11y/anchor-is-valid": "warn", // Ensure links are usable (SEO & accessibility)
    "no-unused-vars": "warn", // Detect unused variables
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // Remove console.log in production
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
