<template>
  <Massmint />
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { usePreferencesStore } from '@/stores/preferences'
import Massmint from '@/components/massmint/Massmint.vue'
const components = { Massmint }

@Component<MassmintPage>({
  components,
})
export default class MassmintPage extends Vue {
  head() {
    const title = 'Kodadot | Massmint'
    const metaData = {
      title,
      type: 'profile',
      description: 'Buy Carbonless NFTs on Kusama',
      url: `/${this.$route.params.prefix}/massmint`,
      image: `${this.$config.public.baseUrl}/k_card.png`,
    }
    return {
      title,
      meta: [...this.$seoMeta(metaData)],
    }
  }
  layout() {
    return 'noFooter'
  }
  middleware({ redirect, params }) {
    if (!usePreferencesStore().getVisitedOnboarding) {
      setTimeout(() => redirect(`/${params.prefix}/massmint/onboarding`))
    }
  }
}
</script>
