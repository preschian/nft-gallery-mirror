<template>
  <div>
    <LinkResolver
      class="is-flex is-align-items-center"
      :route="`/${urlPrefix}/u`"
      :param="address"
      link="u">
      <Identity v-if="address" :address="address" />
      <template #extra>
        <Avatar :size="avatarSize || 24" :value="address" class="mr-2" />
      </template>
    </LinkResolver>
    <template v-if="showTwitter">
      <Identity
        v-if="address"
        :address="address"
        :show-twitter="showTwitter"
        :show-discord="showDiscord"
        class="pt-2" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, mixins } from 'nuxt-property-decorator'
import PrefixMixin from '@/utils/mixins/prefixMixin'
import shortAddress from '@/utils/shortAddress'

const components = {
  Identity: () => import('@/components/identity/IdentityIndex.vue'),
  LinkResolver: () => import('@/components/shared/LinkResolver.vue'),
}

@Component({ components })
export default class ProfileLink extends mixins(PrefixMixin) {
  @Prop() public address!: string
  @Prop(Boolean) public showTwitter!: boolean
  @Prop(Boolean) public showDiscord!: boolean
  @Prop() public avatarSize!: number
  get shortendId(): string {
    return shortAddress(this.address)
  }

  get verticalAlign(): boolean {
    return this.showTwitter
  }
}
</script>

<style scoped>
.subscan__less-margin {
  margin: auto 0.5em auto 0;
}
</style>
