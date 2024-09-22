# ESLint and Prettier Configuration

```npm
npm install eslint-config-standard --save-dev
```

```npm
npm install eslint-plugin-tailwindcss --save-dev
```

```npm
npm install eslint-config-prettier --save-dev
```

```.eslintrc.json
{
  "extends": ["next/core-web-vitals", "standard","plugin:tailwind/recommended","prettier"]
}
```

```npm
npm install prettier --save-dev
```

```settings.json
{
"editor.defaultFormatter":"esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave":
{
"source.fixAll.eslint": true,
"source.addMissingImports": true
},
"[typescriptreact]":
{
"editor.defaultFormatter":"esbenp.prettzer-vscode"
}
}
```
