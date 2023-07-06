import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/:prefix/u/:address', (c) => {
  const prefix = c.req.param('prefix')
  const address = c.req.param('address')

  return fetch(`https://nft-gallery-mirror.pages.dev/${prefix}/u/${address}`)
})

export default app
