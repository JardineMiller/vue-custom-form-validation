/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    plugins: [
        "sort-imports-es6-autofix"
    ],
    extends: [
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
    ],
    parserOptions: {
        // project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaVersion: "latest",
    },
    overrides: [
        {
            files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
            extends: ["plugin:cypress/recommended"],
        },
        {
            files: [
                "*.ts"
            ],
            parserOptions: {
                "project": [
                    "tsconfig.json"
                ],
                "createDefaultProgram": true
            },
            extends: [
                "prettier"
            ],
            rules: {
                // ESLint
                "arrow-spacing": [
                    "error",
                    {
                        "before": true,
                        "after": true
                    }
                ],
                "brace-style": [
                    "error",
                    "stroustrup",
                    {
                        "allowSingleLine": true
                    }
                ],
                "complexity": [
                    "error",
                    {
                        "max": 15
                    }
                ],
                "eqeqeq": [
                    "error",
                    "always"
                ],
                // could back off always to smart if we need to
                "indent": [
                    "error",
                    4,
                    {
                        "SwitchCase": 4,
                        "ignoreComments": false
                    }
                ],
                "max-classes-per-file": [
                    "error",
                    1
                ],
                "max-depth": [
                    "error",
                    {
                        "max": 5
                    }
                ],
                "max-len": "off",
                "multiline-comment-style": [
                    "error",
                    "separate-lines"
                ],
                "no-bitwise": "off",
                "no-alert": "error",
                "no-console": [
                    "error",
                    {
                        "allow": [
                            ""
                        ]
                    }
                ],
                // https://github.com/eslint/eslint/issues/14008#issuecomment-781099293
                "no-debugger": "error",
                "no-fallthrough": "error",
                "no-proto": "error",
                "no-sequences": "error",
                "no-trailing-spaces": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "off",
                "no-useless-concat": "error",
                "object-curly-spacing": [
                    "error",
                    "always"
                ],
                "object-shorthand": "off",
                "prefer-arrow/prefer-arrow-functions": "off",
                "prefer-template": 2,
                "quotes": [
                    "error",
                    "double",
                    {
                        "avoidEscape": true
                    }
                ],
                "semi": [
                    "error",
                    "always",
                    {
                        "omitLastInOneLineBlock": false
                    }
                ],
                "sort-vars": "error",
                "sort-imports-es6-autofix/sort-imports-es6": [
                    1,
                    {
                        "ignoreCase": false,
                        "ignoreMemberSort": false,
                        "memberSyntaxSortOrder": [
                            "multiple",
                            "none",
                            "all",
                            "single"
                        ]
                    }
                ],
                "spaced-comment": [
                    "error",
                    "always",
                    {
                        "block": {
                            "balanced": true
                        }
                    }
                ],

                // TS ESLint
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        "default": "generic",
                        "readonly": "generic"
                    }
                ],
                "@typescript-eslint/ban-types": "off",
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        "accessibility": "no-public"
                    }
                ],
                "@typescript-eslint/indent": "off",
                // handled by ESLint rule section
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        "selector": "property",
                        "modifiers": [
                            "private"
                        ],
                        "format": [
                            "camelCase"
                        ],
                        "leadingUnderscore": "require"
                    }
                ],
                "@typescript-eslint/no-empty-interface": "off",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-inferrable-types": "off",
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
                    "error",
                    {
                        "allowComparingNullableBooleansToTrue": false,
                        "allowComparingNullableBooleansToFalse": false
                    }
                ],
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/prefer-for-of": "off",
                "@typescript-eslint/prefer-includes": "error"
            }
        }
    ],
};
