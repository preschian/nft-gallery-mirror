<template>
  <div class="container">
    <p>get data from routes</p>
    <p>prefix: {{ route.params.prefix }}</p>
    <p>address: {{ route.params.address }}</p>

    <h1 class="mt-4 font-bold">Collected NFTs from {{ route.params.address }}</h1>
    <div class="grid grid-cols-5 gap-4" >
      <a v-for="collection in data.data.collections" :href="`/${prefix}/gallery/${collection.id}`" class="hover:p-4" :key="collection.id">
        <div>{{ collection.name }}</div>
        <img :src="ipfsGateway(collection.meta.image)" :alt="collection.name" class="w-full aspect-square" width="100%" height="100%" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { getUrl, getClient } from '@kodadot1/uniquery'

const route = useRoute()
const address = route.params.address
const prefix = route.params.prefix

const url = getUrl(prefix)
const client = getClient(prefix)

// how to extend meta.id and meta.image to this query?
// const query = client.collectionListByOwner(address)

const {data} = await useFetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
    {
      collections: collectionEntities(where: {currentOwner_eq: "${address}"}, limit: 100, orderBy: updatedAt_DESC) {
        id
        createdAt
        name
        metadata
        currentOwner
        issuer
        meta {
          id
          image
        }
      }
    }
    `
  }),
})

const ipfsGateway = (ipfs) => {
  return ipfs.replace('ipfs://ipfs/', 'https://kodadot-ultra.myfilebase.com/ipfs/')
}

useServerSeoMeta({
  ogType: 'website',
  ogTitle: `${address} Collections`,
  ogDescription: 'NFT Artist Profile on KodaDot | KodaDot - NFT Market Explorer',
  ogImage: ipfsGateway(data.value.data.collections[0]?.meta.image),
  ogUrl: `https://preschian.xyz${route.fullPath}`,
})
</script>
