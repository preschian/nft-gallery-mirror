<template>
  <NeoNftCard
    v-if="nft"
    :nft="nft"
    :placeholder="placeholder"
    :prefix="urlPrefix"
    :show-price="Number(nft?.price) > 0"
    :variant="variant"
    :unloackable-icon="unlockableIcon"
    link="nuxt-link"
    bind-key="to" />
</template>

<script setup lang="ts">
import { NeoNftCard } from '@kodadot1/brick'

import type { NftCardVariant } from '@kodadot1/brick'
import type { NFTWithMetadata } from '@/composables/useNft'

const { urlPrefix } = usePrefix()
const { placeholder } = useTheme()
const { unlockableIcon } = useUnlockableIcon()

const props = defineProps<{
  nft: NFTWithMetadata
  variant?: NftCardVariant
}>()

const { nft } = useNft(props.nft)
</script>
