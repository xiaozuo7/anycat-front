<script setup>
const route = useRoute()
const title = useTitle()

watchEffect(() => {
  title.value = route.meta.title || 'ANYCAT'
})
</script>
<template>
  <div
    class="h-full flex items-center text-16px font-700 text-shadow-sm cursor-pointer"
    @click="$router.push('/')"
  >
    <div
      class="w-36px h-36px rounded-[50%] flex justify-center items-center mr-2px cursor-pointer"
      hover="bg-[var(--color-fill-1)]"
    >
      <icon-maki:animal-shelter class="text-18px" />
    </div>
    {{ title }}
  </div>
</template>
