<template>
  <NeoNftCard
    :nft="nft"
    :prefix="urlPrefix"
    :show-price="showPrice"
    :variant="variant"
    :placeholder="placeholder"
    link="nuxt-link"
    bind-key="to" />
</template>

<script lang="ts" setup>
import { NeoNftCard, NftCardVariant } from '@kodadot1/brick'
import type { NFT } from '@/components/rmrk/service/scheme'
import type { CarouselNFT } from '@/components/base/types'

const { urlPrefix } = usePrefix()
const { placeholder } = useTheme()

const props = defineProps<{
  nft: NFT | CarouselNFT
  variant?: NftCardVariant
}>()

const showPrice = computed((): boolean => {
  return Number(props.nft?.price) > 0
})
</script>
