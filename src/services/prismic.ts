import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'

export const endpoint = process.env.PRISMIC_ENDPOINT
export const repositoryName = prismic.getRepositoryName(endpoint)

export function getPrismicClient(config: any = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
