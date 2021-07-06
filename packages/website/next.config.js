const withMDX = require('@next/mdx')()
const withTM = require('next-transpile-modules')([
  'piny-forest',
  'piny-theme',
  'pss',
])

module.exports = withTM(
  withMDX({
    pageExtensions: ['js', 'tsx', 'mdx'],
  })
)
