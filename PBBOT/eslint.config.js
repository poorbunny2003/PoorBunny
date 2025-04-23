import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
      
  export default [
    eslintJs.configs.recommended,
    eslintConfigPrettier,
      {
       rules: {
            ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
          }
        }
      ];      