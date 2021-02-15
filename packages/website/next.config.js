const withMDX = require('@next/mdx')()
const withTM = require('next-transpile-modules')(['piny-forest', 'pss'])

module.exports = withTM(
  withMDX({
    pageExtensions: ['js', 'tsx', 'mdx'],
  })
)
