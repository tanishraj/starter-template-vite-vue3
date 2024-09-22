import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    ...vue.configs['flat/recommended'],
    prettierConfig,
    {
        files: ['**/*.js', '**/*.vue'],
        ignores: ['*.md', '**/*.scss'],
        linterOptions: {
            reportUnusedDisableDirectives: 'error'
        },
        plugins: { prettier },
        rules: {
            'prettier/prettier': 'error',
            'vue/require-default-prop': 'off',
            'vue/multi-word-component-names': 'off',
            'newline-before-return': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-warning-comments': 'warn',
            'object-shorthand': 'error',
            'no-duplicate-imports': 'error'
        }
    }
]
