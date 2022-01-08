import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain:
    process.env.NEXT_PUBLIC_SERVICE_DOMAIN === undefined
      ? ''
      : process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY === undefined ? '' : process.env.NEXT_PUBLIC_API_KEY,
})
