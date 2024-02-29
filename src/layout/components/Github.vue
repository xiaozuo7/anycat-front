<script setup>
const githubUrl = 'https://github.com/xiaozuo7'
const openNewWindow = () => window.open(githubUrl, '_blank')
</script>
<template>
  <a-button type="text" @click="openNewWindow">
    <template #icon>
      <icon-mdi-github class="text-[var(--color-text-1)] text-16px" />
    </template>
  </a-button>
</template>
