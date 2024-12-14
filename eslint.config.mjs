import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import("@eslint/eslintrc/universal").FlatConfig[]} */
export default [
    // Apply to all JavaScript and TypeScript files
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            parser: tseslintParser,
            globals: globals.node,
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        plugins: {
            prettier: eslintPluginPrettier,
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...pluginJs.configs.recommended.rules, // Load JS recommended rules
            ...tseslint.configs.recommended.rules, // Load TypeScript rules
            'prettier/prettier': 'error', // Enforce Prettier as an error
        },
    },
    // Add Prettier override to disable conflicting rules
    {
        rules: {
            ...eslintPluginPrettier.configs.recommended.rules,
        },
    },
];
