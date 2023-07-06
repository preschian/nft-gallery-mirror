<template>
  <div class="container">
    <p>get data from routes</p>
    <p>prefix: {{ route.params.prefix }}</p>
    <p>address: {{ route.params.address }}</p>

    <h1 class="mt-4 font-bold">Collected NFTs from {{ route.params.address }}</h1>
    <div class="grid grid-cols-5 gap-4" >
      <a v-for="item in data.data.items" :href="`/${prefix}/gallery/${item.id}`" class="hover:p-4" :key="item.id">
        <div class="truncate">{{ item.name }}</div>
        <img v-if="item.meta.image" :src="ipfsGateway(item.meta.image)" :alt="item.name" class="w-full aspect-square" width="100%" height="100%" />
        <img v-else src="https://kodadot.xyz/k_card.png" :alt="item.name" />
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

// const query = client.itemListByOwner(address)

const {data} = await useFetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
      {
        items: nftEntities(where: {currentOwner_eq: "DY4SQF2iD456tH89aQtz5wv1EV3BbSW8wKKuMcwbmXaj1pM", burned_eq: false}, limit: 100) {
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
  if (!ipfs) {
    return ipfs
  }

  return ipfs.replace('ipfs://ipfs/', 'https://kodadot-ultra.myfilebase.com/ipfs/')
}

useServerSeoMeta({
  ogType: 'website',
  ogTitle: `${address} Collections`,
  ogDescription: 'NFT Artist Profile on KodaDot | KodaDot - NFT Market Explorer',
  ogImage: ipfsGateway(data.value.data.items[0]?.meta.image),
  ogUrl: `https://preschian.xyz${route.fullPath}`,
})

onMounted(() => {
  console.clear()
  console.log(data.value.data.items)
})
</script>
