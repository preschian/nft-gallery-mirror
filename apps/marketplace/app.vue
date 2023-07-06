<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
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
