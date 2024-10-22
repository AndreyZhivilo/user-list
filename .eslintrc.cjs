module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
				"airbnb",
				"airbnb/hooks",
				"prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 15,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
		"import/extensions": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "react/jsx-filename-extension": [
      2,
      { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "no-return-await": "off",
    "no-shadow": "off",
    "react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"no-param-reassign": "off",
    },
		    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": [
                    "./tsconfig.app.json",
                    "./tsconfig.node.json"
                ]
            },
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
};
