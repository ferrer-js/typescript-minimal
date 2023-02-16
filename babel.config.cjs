module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        targets: {
          node: 18
        }
      }
    ],
    '@babel/preset-typescript'
  ]
}