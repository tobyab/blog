import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
  }

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  })

  module.exports = withContentlayer({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })