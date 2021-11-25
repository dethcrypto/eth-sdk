# Contributing

We welcome all contributions!

## Developing

```sh
yarn # install deps

yarn build # this is required for tests to pass

yarn test

```

Run `yarn test:fix` before pushing; it will run eslint, prettier in fix mode and run all tests.

### Changesets

We use [changesets](https://github.com/atlassian/changesets) for changelog management. Changeset is a file specifying
type of change (major, minor, patch) and summary of change from the **users perspective**. Run `yarn changeset add` and
follow the wizard.

As a one-time contributor, you don't need to worry about this as a maintainer will usually write a changeset for you.

### Local linking

Run `yarn build` to build all packages or `yarn watch` to start watching. Then enter desired package directory and run
`yarn link`.

### Debugging 🐞

```sh
DEBUG=* eth-sdk
```
