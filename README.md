![Build and Test](https://github.com/Pavel-Durov/me/actions/workflows/build_test_react.yml/badge.svg) ![Snyk](https://snyk.io/test/github/Pavel-Durov/me/badge.svg)

# My website

[Vercel Project](https://vercel.com/pav3ldurov/pavel-personal-website)

[Github Actions](https://docs.github.com/en/actions)

[Infra README](./infra/README.md)

## Getting started

```shell
$ npm install
```

## Run

```shell
$ npm run start
```

## Build

```shell
$ npm run build
```

## Test
```shell
$ npm run test
```

## Lint

```shell
$ npm run lint # lint check
$ npm run lint:fix # lint write
```

## Git hooks

### Tests

```shell
npx husky add .husky/pre-commit "npm test" 
npx husky add .husky/pre-commit "npm run lint" 
git add .husky/pre-commit
```

### Commit message

```shell
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
npm pkg set scripts.commitlint="commitlint --edit"
npx husky add .husky/commit-msg 'npm run commitlint ${1}'
```

## Tools that made it possible

- [Vercel](https://vercel.com/pav3ldurov)

- [Github Actions](https://docs.github.com/en/actions)

- [BOOTSTRA.386](https://github.com/kristopolous/BOOTSTRA.386)

- [Fonts](https://int10h.org/oldschool-pc-fonts/readme/)

- [JIMP](https://www.npmjs.com/package/jimp)
