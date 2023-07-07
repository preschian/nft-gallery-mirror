<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://preschian.xyz' + route.path,
    },
  ],
})
</script>
