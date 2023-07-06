<template>
  <div>
    <p>prefix: {{ route.params.prefix }}</p>
    <p>address: {{ route.params.address }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

console.log(route.params)
</script>
