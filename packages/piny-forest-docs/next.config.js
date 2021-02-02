const withMDX = require('@next/mdx')()
const withTM = require('next-transpile-modules')([
  'piny-forest/src',
  'piny-theme/src',
])

module.exports = withTM(
  withMDX({
    pageExtensions: ['js', 'tsx', 'mdx'],
  })
)
