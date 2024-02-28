<script setup>
const handleClickMini = () => {
  AMessage.info('hello anycat!')
}
</script>
<template>
  <div>hello, This is anycat home page!</div>
  <!-- <icon-streamline-emojis-amazed-face class="icon" />
  <div>hello isboyjc, This is toolsdog home page!</div> -->
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>

  <HelloWorld />

  <!-- Icon-->
  <div>
    <icon-streamline-emojis-amazed-face class="icon" />
    <icon-ep-alarm-clock class="icon" />
    <icon-home-dog class="" />
    <icon-user-bag class="" />
  </div>
</template>
<style scoped lang="scss"></style>

