import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

// already define routes in wrangler.toml,
// define routes in here is just for the guarding
// to make sure only this routes are allowed to be proxied
app.get('/:prefix/u/:address', (c) => {
  const prefix = c.req.param('prefix')
  const address = c.req.param('address')

  return fetch(`https://nft-gallery-mirror.pages.dev/${prefix}/u/${address}`)
})

export default app
