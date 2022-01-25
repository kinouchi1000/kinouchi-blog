/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'public/favicon.ico' }],
}
