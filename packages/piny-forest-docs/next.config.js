const withTM = require('next-transpile-modules')(['piny-forest/src'])
const withMDX = require('@next/mdx')()

module.exports = withTM(
  withMDX({
    pageExtensions: ['js', 'tsx', 'mdx'],
  })
)
