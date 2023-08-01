module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "sort-imports": ["warn", {
            "ignoreCase": false,
            "ignoreDeclarationSort": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
            "allowSeparatedGroups": false
        }],
        "semi": ["error", "always"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": 1,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/strict-boolean-expressions": 0,
        '@typescript-eslint/space-before-function-paren': 0,
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/styles/*", ".eslintrc.js", "*.html", "*.webpack.js", "build"]
}
