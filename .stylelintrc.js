export default {
    plugins: ['stylelint-scss', 'stylelint-prettier'],
    rules: {
        'prettier/prettier': true,

        // General / Sheet
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'selector-max-universal': 2,
        'max-nesting-depth': 6,

        // Operators
        'scss/operator-no-unspaced': true,

        // Comment
        'comment-no-empty': true,
        'no-invalid-double-slash-comments': true,

        // Fonts
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'font-family-name-quotes': 'always-unless-keyword',

        // Colors
        'color-no-invalid-hex': true,

        // Values
        'unit-no-unknown': true,
        'length-zero-no-unit': true,

        // Properties
        'property-no-unknown': true,
        'shorthand-property-no-redundant-values': true,

        // At-rule
        'scss/at-rule-no-unknown': true,
        'at-rule-no-vendor-prefix': true,

        // Selectors
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: 'global'
            }
        ],
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'single',
        'scss/selector-no-redundant-nesting-selector': true
    }
}
