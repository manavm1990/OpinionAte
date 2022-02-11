# React ➕ Vite ➕ Tailwind CSS

## `npm run dev`

## Stuff U May Want to Customize

You should just run: `npm run dev` and try things out as is. It's really a nice setup with auto-formatting, auto-saving and just generally a lot of spit set up that you don't need to worry about.

### [VS Code Extensions and Settings](.vscode)

Includes [VS Code Tailwind Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to auto-complete that spit!

### [ES Lint](.eslintrc.js)

It's using `xo` style guide `prettier` and recommended React stuff including the [Rules of 🪝s](https://reactjs.org/docs/hooks-rules.html) and [`jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y).

### [Tailwind Config](tailwind.config.js)

It includes: `require('@tailwindcss/forms'),`.

## `npm test`

`jest` ➕ plus all the 💩 needed to get the 💩 working with `import` 🤬.

See `App.test.jsx` for a couple of sample tests, including snapshot testing.

[VS Code Jest Extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) has been included in [recommended extensions](.vscode/extensions.json).

## Other Spit

Includes aliases for `"/src"` and `"/src/components". See `vite.config.js` for more info ℹ️
