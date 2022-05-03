"use strict";

module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "env": {
    "es2021": true
  },
  "overrides": [
    {
      "files": ".eslintrc.js",
      "env": {
        "node": true
      }
    },
    {
      "files": "vite.config.js",
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": "*.jsx",
      "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "env": {
        "browser": true,
        "es2021": true
      }
    }
  ],
  "rules": {
    "react/boolean-prop-naming": [
      "warn",
      {
        "message": "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})",
        "validateNested": true
      }
    ],
    "react/button-has-type": [
      "warn",
      {
        "button": true,
        "reset": true,
        "submit": true
      }
    ],
    "react/default-props-match-prop-types": [
      "warn",
      {
        "allowRequiredDefaults": true
      }
    ],
    "react/destructuring-assignment": [
      "warn",
      "always"
    ],
    "react/function-component-definition": [
      "warn",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/hook-use-state": [
      "warn"
    ],
    "react/iframe-missing-sandbox": [
      "warn"
    ],
    "react/no-access-state-in-setstate": [
      "warn"
    ],
    "react/no-adjacent-inline-elements": [
      "warn"
    ],
    "react/no-array-index-key": [
      "warn"
    ],
    "react/no-arrow-function-lifecycle": [
      "warn"
    ],
    "react/no-children-prop": [
      "warn",
      {
        "allowFunctions": false
      }
    ],
    "react/no-danger": [
      "warn"
    ],
    "react/no-danger-with-children": [
      "warn"
    ],
    "react/no-deprecated": [
      "warn"
    ],
    "react/no-did-mount-set-state": [
      "warn"
    ],
    "react/no-did-update-set-state": [
      "warn"
    ],
    "react/no-direct-mutation-state": [
      "warn"
    ],
    "react/no-find-dom-node": [
      "warn"
    ],
    "react/no-invalid-html-attribute": [
      "warn"
    ],
    "react/no-is-mounted": [
      "warn"
    ],
    "react/no-multi-comp": [
      "warn",
      {
        "ignoreStateless": false
      }
    ],
    "react/no-namespace": [
      "warn"
    ],
    "react/no-redundant-should-component-update": [
      "warn"
    ],
    "react/no-render-return-value": [
      "warn"
    ],
    "react/no-set-state": [
      "off"
    ],
    "react/no-string-refs": [
      "warn"
    ],
    "react/no-this-in-sfc": [
      "warn"
    ],
    "react/no-typos": [
      "warn"
    ],
    "react/no-unescaped-entities": [
      "warn"
    ],
    "react/no-unknown-property": [
      "warn"
    ],
    "react/no-unsafe": [
      "warn",
      {
        "checkAliases": true
      }
    ],
    "react/no-unstable-nested-components": [
      "warn",
      {
        "allowAsProps": false
      }
    ],
    "react/no-unused-class-component-methods": [
      "warn"
    ],
    "react/no-unused-prop-types": [
      "warn"
    ],
    "react/no-unused-state": [
      "warn"
    ],
    "react/no-will-update-set-state": [
      "warn"
    ],
    "react/prefer-es6-class": [
      "warn"
    ],
    "react/prefer-read-only-props": [
      "warn"
    ],
    "react/prefer-stateless-function": [
      "warn",
      {
        "ignorePureComponents": false
      }
    ],
    "react/prop-types": [
      "warn",
      {
        "skipUndeclared": false
      }
    ],
    "react/react-in-jsx-scope": [
      "warn"
    ],
    "react/require-default-props": [
      "warn"
    ],
    "react/require-optimization": [
      "warn"
    ],
    "react/require-render-return": [
      "warn"
    ],
    "react/self-closing-comp": [
      "warn",
      {
        "component": true,
        "html": true
      }
    ],
    "react/sort-comp": [
      "warn"
    ],
    "react/sort-prop-types": [
      "warn"
    ],
    "react/state-in-constructor": [
      "warn"
    ],
    "react/static-property-placement": [
      "warn"
    ],
    "react/style-prop-object": [
      "warn"
    ],
    "react/void-dom-elements-no-children": [
      "warn"
    ],
    "react/jsx-boolean-value": [
      "warn",
      "never"
    ],
    "react/jsx-child-element-spacing": [
      "warn"
    ],
    "react/jsx-closing-bracket-location": [
      "warn",
      "after-props"
    ],
    "react/jsx-closing-tag-location": [
      "warn"
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      {
        "props": "never",
        "children": "never",
        "propElementValues": "always"
      }
    ],
    "react/jsx-curly-newline": [
      "warn",
      {
        "multiline": "require",
        "singleline": "forbid"
      }
    ],
    "react/jsx-curly-spacing": [
      "warn",
      {
        "when": "never",
        "children": true
      }
    ],
    "react/jsx-equals-spacing": [
      "warn",
      "never"
    ],
    "react/jsx-filename-extension": [
      "warn"
    ],
    "react/jsx-first-prop-new-line": [
      "warn",
      "multiline-multiprop"
    ],
    "react/jsx-fragments": [
      "warn",
      "element"
    ],
    "react/jsx-handler-names": [
      "warn",
      {
        "eventHandlerPrefix": "on",
        "eventHandlerPropPrefix": "on",
        "checkLocalVariables": true,
        "checkInlineFunction": true
      }
    ],
    "react/jsx-indent": [
      "warn",
      2,
      {
        "checkAttributes": true,
        "indentLogicalExpressions": true
      }
    ],
    "react/jsx-indent-props": [
      "warn",
      2
    ],
    "react/jsx-key": [
      "warn",
      {
        "checkFragmentShorthand": true,
        "checkKeyMustBeforeSpread": true,
        "warnOnDuplicates": true
      }
    ],
    "react/jsx-newline": [
      "warn",
      {
        "prevent": true
      }
    ],
    "react/jsx-no-bind": [
      "warn",
      {
        "ignoreDOMComponents": false,
        "ignoreRefs": false,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false
      }
    ],
    "react/jsx-no-comment-textnodes": [
      "warn"
    ],
    "react/jsx-no-constructed-context-values": [
      "warn"
    ],
    "react/jsx-no-duplicate-props": [
      "warn"
    ],
    "react/jsx-no-script-url": [
      "warn"
    ],
    "react/jsx-no-target-blank": [
      "warn",
      {
        "allowReferrer": false,
        "enforceDynamicLinks": "always",
        "warnOnSpreadAttributes": true,
        "links": true,
        "forms": true
      }
    ],
    "react/jsx-no-undef": [
      "warn",
      {
        "allowGlobals": true
      }
    ],
    "react/jsx-no-useless-fragment": [
      "warn",
      {
        "allowExpressions": false
      }
    ],
    "react/jsx-one-expression-per-line": [
      "warn",
      {
        "allow": "literal"
      }
    ],
    "react/jsx-pascal-case": [
      "warn",
      {
        "allowAllCaps": false,
        "allowNamespace": true,
        "allowLeadingUnderscore": false

      }
    ],
    "react/jsx-props-no-multi-spaces": [
      "warn"
    ],
    "react/jsx-tag-spacing": [
      "warn",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-react": [
      "warn"
    ],
    "react/jsx-uses-vars": [
      "warn"
    ],
    "react/jsx-wrap-multilines": [
      "warn",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "react-hooks/rules-of-hooks": [
      "warn"
    ],
    "react-hooks/exhaustive-deps": [
      "warn"
    ],
    "array-callback-return": [
      "warn",
      {
        "allowImplicit": false,
        "checkForEach": true
      }
    ],
    "constructor-super": [
      "warn"
    ],
    "for-direction": [
      "warn"
    ],
    "getter-return": [
      "warn",
      {
        "allowImplicit": false
      }
    ],
    "no-async-promise-executor": [
      "warn"
    ],
    "no-await-in-loop": [
      "warn"
    ],
    "no-class-assign": [
      "warn"
    ],
    "no-compare-neg-zero": [
      "warn"
    ],
    "no-cond-assign": [
      "warn",
      "always"
    ],
    "no-const-assign": [
      "warn"
    ],
    "no-constant-condition": [
      "warn",
      {
        "checkLoops": true
      }
    ],
    "no-constructor-return": [
      "warn"
    ],
    "no-control-regex": [
      "warn"
    ],
    "no-debugger": [
      "warn"
    ],
    "no-dupe-args": [
      "warn"
    ],
    "no-dupe-class-members": [
      "warn"
    ],
    "no-dupe-else-if": [
      "warn"
    ],
    "no-dupe-keys": [
      "warn"
    ],
    "no-duplicate-case": [
      "warn"
    ],
    "no-duplicate-imports": [
      "warn",
      {
        "includeExports": true
      }
    ],
    "no-empty-character-class": [
      "warn"
    ],
    "no-empty-pattern": [
      "warn"
    ],
    "no-ex-assign": [
      "warn"
    ],
    "no-fallthrough": [
      "warn"
    ],
    "no-func-assign": [
      "warn"
    ],
    "no-import-assign": [
      "warn"
    ],
    "no-inner-declarations": [
      "warn",
      "both"
    ],
    "no-invalid-regexp": [
      "warn"
    ],
    "no-irregular-whitespace": [
      "warn"
    ],
    "no-loss-of-precision": [
      "warn"
    ],
    "no-misleading-character-class": [
      "warn"
    ],
    "no-new-symbol": [
      "warn"
    ],
    "no-obj-calls": [
      "warn"
    ],
    "no-promise-executor-return": [
      "warn"
    ],
    "no-prototype-builtins": [
      "warn"
    ],
    "no-self-assign": [
      "warn"
    ],
    "no-self-compare": [
      "warn"
    ],
    "no-setter-return": [
      "warn"
    ],
    "no-template-curly-in-string": [
      "warn"
    ],
    "no-this-before-super": [
      "warn"
    ],
    "no-undef": [
      "warn"
    ],
    "no-unexpected-multiline": [
      "warn"
    ],
    "no-unmodified-loop-condition": [
      "warn"
    ],
    "no-unreachable": [
      "warn"
    ],
    "no-unreachable-loop": [
      "warn"
    ],
    "no-unsafe-finally": [
      "warn"
    ],
    "no-unsafe-negation": [
      "warn",
      {
        "enforceForOrderingRelations": true
      }
    ],
    "no-unsafe-optional-chaining": [
      "warn",
      {
        "disallowArithmeticOperators": true
      }
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "no-use-before-define": [
      "warn",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "no-useless-backreference": [
      "warn"
    ],
    "require-atomic-updates": [
      "warn"
    ],
    "use-isnan": [
      "warn",
      {
        "enforceForSwitchCase": true,
        "enforceForIndexOf": true
      }
    ],
    "valid-typeof": [
      "warn",
      {
        "requireStringLiterals": true
      }
    ],
    "accessor-pairs": [
      "warn",
      {
        "setWithoutGet": true,
        "getWithoutSet": true,
        "enforceForClassMembers": true
      }
    ],
    "arrow-body-style": [
      "warn",
      "as-needed"
    ],
    "block-scoped-var": [
      "warn"
    ],
    "camelcase": [
      "warn",
      {
        "properties": "always",
        "ignoreDestructuring": true,
        "ignoreImports": true,
        "ignoreGlobals": true
      }
    ],
    "class-methods-use-this": [
      "warn"
    ],
    "consistent-return": [
      "warn",
      {
        "treatUndefinedAsUnspecified": true
      }
    ],
    "consistent-this": [
      "warn",
      "that"
    ],
    "curly": [
      "warn",
      "all"
    ],
    "default-case": [
      "warn"
    ],
    "default-case-last": [
      "warn"
    ],
    "default-param-last": [
      "warn"
    ],
    "dot-notation": [
      "warn",
      {
        "allowKeywords": true
      }
    ],
    "eqeqeq": [
      "warn",
      "always"
    ],
    "func-name-matching": [
      "warn",
      "always",
      {
        "considerPropertyDescriptor": true,
        "includeCommonJSModuleExports": true
      }
    ],
    "func-names": [
      "warn",
      "as-needed",
      {
        "generators": "as-needed"
      }
    ],
    "func-style": [
      "warn",
      "expression"
    ],
    "grouped-accessor-pairs": [
      "warn",
      "getBeforeSet"
    ],
    "guard-for-in": [
      "warn"
    ],
    "init-declarations": [
      "warn",
      "always"
    ],
    "new-cap": [
      "warn",
      {
        "newIsCap": true,
        "capIsNew": true,
        "properties": true
      }
    ],
    "no-array-constructor": [
      "warn"
    ],
    "no-bitwise": [
      "warn",
      {
        "int32Hint": false
      }
    ],
    "no-caller": [
      "warn"
    ],
    "no-case-declarations": [
      "warn"
    ],
    "no-confusing-arrow": [
      "warn"
    ],
    "no-delete-var": [
      "warn"
    ],
    "no-div-regex": [
      "warn"
    ],
    "no-else-return": [
      "warn"
    ],
    "no-empty": [
      "warn"
    ],
    "no-empty-function": [
      "warn"
    ],
    "no-eq-null": [
      "warn"
    ],
    "no-eval": [
      "warn"
    ],
    "no-extend-native": [
      "warn"
    ],
    "no-extra-bind": [
      "warn"
    ],
    "no-extra-boolean-cast": [
      "warn"
    ],
    "no-extra-label": [
      "warn"
    ],
    "no-extra-semi": [
      "warn"
    ],
    "no-floating-decimal": [
      "warn"
    ],
    "no-global-assign": [
      "warn"
    ],
    "no-implicit-coercion": [
      "warn"
    ],
    "no-implicit-globals": [
      "warn",
      {
        "lexicalBindings": false
      }
    ],
    "no-implied-eval": [
      "warn"
    ],
    "no-invalid-this": [
      "warn",
      {
        "capIsConstructor": true
      }
    ],
    "no-iterator": [
      "warn"
    ],
    "no-label-var": [
      "warn"
    ],
    "no-labels": [
      "warn"
    ],
    "no-lone-blocks": [
      "warn"
    ],
    "no-lonely-if": [
      "warn"
    ],
    "no-loop-func": [
      "warn"
    ],
    "no-mixed-operators": [
      "warn"
    ],
    "no-multi-assign": [
      "warn"
    ],
    "no-multi-str": [
      "warn"
    ],
    "no-negated-condition": [
      "warn"
    ],
    "no-new-func": [
      "warn"
    ],
    "no-new-object": [
      "warn"
    ],
    "no-new-wrappers": [
      "warn"
    ],
    "no-nonoctal-decimal-escape": [
      "warn"
    ],
    "no-octal": [
      "warn"
    ],
    "no-octal-escape": [
      "warn"
    ],
    "no-param-reassign": [
      "warn",
      {
        "props": true
      }
    ],
    "no-plusplus": [
      "warn",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-proto": [
      "warn"
    ],
    "no-redeclare": [
      "warn"
    ],
    "no-regex-spaces": [
      "warn"
    ],
    "no-return-assign": [
      "warn"
    ],
    "no-return-await": [
      "warn"
    ],
    "no-script-url": [
      "warn"
    ],
    "no-sequences": [
      "warn"
    ],
    "no-shadow": [
      "warn"
    ],
    "no-throw-literal": [
      "warn"
    ],
    "no-undef-init": [
      "warn"
    ],
    "no-undefined": [
      "warn"
    ],
    "no-underscore-dangle": [
      "warn",
      {
        "enforceInMethodNames": true
      }
    ],
    "no-unneeded-ternary": [
      "warn",
      {
        "defaultAssignment": true
      }
    ],
    "no-unused-expressions": [
      "warn",
      {
        "enforceForJSX": true
      }
    ],
    "no-unused-labels": [
      "warn"
    ],
    "no-useless-call": [
      "warn"
    ],
    "no-useless-catch": [
      "warn"
    ],
    "no-useless-computed-key": [
      "warn",
      {
        "enforceForClassMembers": true
      }
    ],
    "no-useless-concat": [
      "warn"
    ],
    "no-useless-constructor": [
      "warn"
    ],
    "no-useless-escape": [
      "warn"
    ],
    "no-useless-rename": [
      "warn"
    ],
    "no-useless-return": [
      "warn"
    ],
    "no-var": [
      "warn"
    ],
    "no-void": [
      "warn",
      {
        "allowAsStatement": false
      }
    ],
    "no-with": [
      "warn"
    ],
    "object-shorthand": [
      "warn",
      "always"
    ],
    "one-var": [
      "warn",
      "never"
    ],
    "operator-assignment": [
      "warn",
      "always"
    ],
    "prefer-arrow-callback": [
      "warn",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": false
      }
    ],
    "prefer-const": [
      "warn"
    ],
    "prefer-destructuring": [
      "warn"
    ],
    "prefer-exponentiation-operator": [
      "warn"
    ],
    "prefer-named-capture-group": [
      "warn"
    ],
    "prefer-numeric-literals": [
      "warn"
    ],
    "prefer-object-spread": [
      "warn"
    ],
    "prefer-regex-literals": [
      "warn"
    ],
    "prefer-rest-params": [
      "warn"
    ],
    "prefer-spread": [
      "warn"
    ],
    "prefer-template": [
      "warn"
    ],
    "quote-props": [
      "warn",
      "always"
    ],
    "radix": [
      "warn",
      "always"
    ],
    "require-await": [
      "warn"
    ],
    "require-unicode-regexp": [
      "warn"
    ],
    "require-yield": [
      "warn"
    ],
    "strict": [
      "warn",
      "global"
    ],
    "symbol-description": [
      "warn"
    ],
    "vars-on-top": [
      "warn"
    ],
    "array-bracket-newline": [
      "warn",
      "consistent"
    ],
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "array-element-newline": [
      "warn",
      "consistent"
    ],
    "arrow-parens": [
      "warn",
      "always"
    ],
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "block-spacing": [
      "warn",
      "always"
    ],
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "warn",
      "last"
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "dot-location": [
      "warn",
      "property"
    ],
    "eol-last": [
      "warn",
      "always"
    ],
    "func-call-spacing": [
      "warn",
      "never"
    ],
    "function-call-argument-newline": [
      "warn",
      "consistent"
    ],
    "function-paren-newline": [
      "warn",
      "consistent"
    ],
    "generator-star-spacing": [
      "warn",
      {
        "before": false,
        "after": true,
        "anonymous": "neither",
        "method": "before"
      }
    ],
    "implicit-arrow-linebreak": [
      "warn",
      "beside"
    ],
    "indent": [
      "warn",
      2
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "key-spacing": [
      "warn",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "new-parens": [
      "warn",
      "always"
    ],
    "no-mixed-spaces-and-tabs": [
      "warn"
    ],
    "no-multi-spaces": [
      "warn",
      {
        "ignoreEOLComments": false
      }
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ],
    "no-tabs": [
      "warn",
      {
        "allowIndentationTabs": false
      }
    ],
    "no-trailing-spaces": [
      "warn",
      {
        "skipBlankLines": false,
        "ignoreComments": true
      }
    ],
    "no-whitespace-before-property": [
      "warn"
    ],
    "nonblock-statement-body-position": [
      "warn",
      "beside"
    ],
    "object-curly-newline": [
      "warn",
      {
        "consistent": true
      }
    ],
    "object-curly-spacing": [
      "warn",
      "always",
      {
        "arraysInObjects": false,
        "objectsInObjects": false
      }
    ],
    "object-property-newline": [
      "warn",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "operator-linebreak": [
      "warn",
      "none"
    ],
    "padded-blocks": [
      "warn",
      "never"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "semi-spacing": [
      "warn",
      {
        "before": false,
        "after": false
      }
    ],
    "semi-style": [
      "warn",
      "last"
    ],
    "space-before-blocks": [
      "warn",
      "always"
    ],
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "warn",
      "never"
    ],
    "space-infix-ops": [
      "warn",
      {
        "int32Hint": false
      }
    ],
    "space-unary-ops": [
      "warn",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "switch-colon-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "template-curly-spacing": [
      "warn",
      "never"
    ],
    "template-tag-spacing": [
      "warn",
      "never"
    ],
    "wrap-iife": [
      "warn",
      "inside"
    ],
    "yield-star-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ]
  }
};
