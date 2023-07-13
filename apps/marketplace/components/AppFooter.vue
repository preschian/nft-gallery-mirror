<template>
  <div class="p-10 border-t border-black bg-white">
    <div class="flex items-start font-bold">
      <div class="flex-1">
        <p class="font-bold text-xl mb-4">Get The Latest KodaDot Updates</p>
      </div>
      <div class="flex-1">
        <p class="font-bold text-xl mb-4">Incentives</p>
        <div>
          <a
            v-for="menu in menuIncentives"
            :href="menu.url"
            class="flex flex-col capitalize font-normal">
            {{ menu.name }}
          </a>
        </div>
      </div>
      <div class="flex-1">
        <p class="font-bold text-xl mb-4">Marketplace</p>
        <div>
          <a
            v-for="menu in menuMarketplace"
            :href="menu.url"
            class="flex flex-col capitalize font-normal">
            {{ menu.name }}
          </a>
        </div>
      </div>
      <div class="flex-1">
        <p class="font-bold text-xl mb-4">KodaDot</p>
        <div>
          <a
            v-for="menu in menuKodadot"
            :href="menu.url"
            class="flex flex-col capitalize font-normal">
            {{ menu.name }}
          </a>
        </div>
      </div>
      <div class="flex-1">
        <p class="font-bold text-xl mb-4">Join Our Community</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuIncentives = [
  {
    name: 'ambassador program',
    url: 'https://hello.kodadot.xyz/be-part-of-kodadot/kodadots-programs/ambassador-program',
  },
  {
    name: 'artist ambassador',
    url: 'https://hello.kodadot.xyz/be-part-of-kodadot/kodadots-programs/artist-ambassador-program',
  },

  {
    name: 'referralProgram',
    url: 'https://hello.kodadot.xyz/be-part-of-kodadot/kodadots-programs/artist-referral-program',
  },
]

const menuMarketplace = [
  {
    name: 'developers',
    url: 'https://developers.kodadot.xyz',
  },
  {
    name: 'FAQ',
    url: 'https://hello.kodadot.xyz/ecosystem/faq',
  },
  {
    name: 'tutorial',
    url: 'https://hello.kodadot.xyz/tutorial/',
  },
]

const menuKodadot = [
  {
    name: 'about',
    url: 'https://hello.kodadot.xyz/about-us/who-are-we',
  },
  {
    name: 'careers',
    url: 'https://hello.kodadot.xyz/be-part-of-kodadot/join-as-a-developer/hiring',
  },
  {
    name: 'merchshop',
    url: 'https://shop.kodadot.xyz',
  },

  {
    name: 'press kit',
    url: 'https://github.com/kodadot/kodadot-presskit/tree/main/v3',
  },
]
</script>
