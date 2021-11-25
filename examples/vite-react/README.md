### @dethcrypto/vite-react-example

You can run the dev server in the example with `yarn dev` or build

If you copy the directory outside of eth-sdk repo, make sure to change `@dethcrypto` dependencies from relative
`file:../../` installs to newest released versions.

---

#### Vite dependency pre-bundling and codegen to node_modules

We run the dev server with `vite --force` to ensure re-bundling of dependencies when the dev server starts.

By default, eth-sdk emits generated types to `node_modules/.dethcrypto/eth-sdk-client`.

You can also change `config.outputPath` to somewhere outside of node_modules.

Read more at: https://vitejs.dev/guide/dep-pre-bundling.html
