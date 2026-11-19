# Vite 8.3.8 on Windows: modules bundled twice from a lowercase drive letter

Since Vite 8.3.8, on Windows, `vite build` started from a working directory spelled with a
lowercase drive letter (`c:\project`) bundles a module twice when it is imported both through a
relative path and through an alias built from `import.meta.url` (the `'@'` alias that create-vue
scaffolds). Each copy has its own module state.

`src/main.js` imports `src/state.js` both ways. `repro.mjs` builds the project from this directory
spelled with a lowercase, then an uppercase drive letter, and counts the copies of `src/state.js`
in the output.

```
npm install
node repro.mjs
```

With vite 8.3.8:

```
cwd c:\...  exit 0  copies of src/state.js: 2
cwd C:\...  exit 0  copies of src/state.js: 1
```

With vite 8.3.7 (`npm install -D -E vite@8.3.7`):

```
cwd c:\...  exit 0  copies of src/state.js: 1
cwd C:\...  exit 0  copies of src/state.js: 1
```
