const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      isTest
        ? { targets: { node: 'current' } }
        : {
            modules: false,
            targets: '> 1%',
            loose: true,
          },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@emotion/babel-plugin', { sourceMap: false, autoLabel: 'never' }],
  ],
  ignore: isTest ? [] : ['**/*.test.tsx'],
}
