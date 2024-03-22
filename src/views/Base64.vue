<template>
  <div>
    <div class="title">Base64加解密</div>
    <a-textarea
      class="text1"
      placeholder="请输入要进行编码或解码的字符"
      allow-clear
      v-model="text1"
    />
    <div align="start" class="space-content">
      <a-button type="primary" @click="encode">编码 Encode</a-button>
      <a-button type="outline" @click="decode">解码 Decode</a-button>
      <a-button type="outline" @click="exchange" class="exchange"
        ><template #icon><icon-system-uicons:chevron-open /></template>交换</a-button
      >
    </div>
    <a-textarea class="text2" placeholder="编码或解码的结果" allow-clear v-model="text2" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text1 = ref('')
const text2 = ref('')

function encode() {
  text2.value = window.btoa(text1.value)
}
function decode() {
  text2.value = window.atob(text1.value)
}
function exchange() {
  const x = text2.value
  text2.value = text1.value
  text1.value = x
}
</script>

<style scoped>
.text1,
.text2 {
  width: 600px;
  height: 200px;
}
.space-content {
  width: 600px;
  height: 50px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.exchange {
  margin-left: 100px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
