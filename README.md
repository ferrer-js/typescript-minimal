# typescript-minimal

A minimal set of configuration files for building a Typescript application or library. Designed to support the latest forward-thinking tools and practices in the JS/TS ecosystem.

## Included Tooling

- Package management via `yarn` 4, including PnP packaging.
- Type checking and automatic exportation of typings via core `typescript` (v4+).
- Linting via `eslint`.
- Testing with `jest`.
- Default VSCode configuration via `.vscode` and `.editorconfig`
- Transpilation via `babel` (v7)
- Bundling via `webpack` v5, including PnP support. Configurable for bundling as a library (ignore imported modules) or as a full bundle.
- VS Code integration for all of the above, with the help of `@yarnpkg/sdks`

## Build Chains

### `tsc`

Standard build using the TypeScript compiler. Uses `@tsconfig/node-lts` for compiler settings.