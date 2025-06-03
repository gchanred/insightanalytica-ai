# InsightAnalytica.AI – Fully Working React + Tailwind Setup

## Setup Instructions

```bash
npm install
npm start
```

If Tailwind doesn't compile, run:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then ensure tailwind.config.js has:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
