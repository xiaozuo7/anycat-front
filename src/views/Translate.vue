<template>
  <div>
    <div class="title">在线翻译</div>
    <a-textarea class="text1" placeholder="请输入要翻译的内容" allow-clear v-model="text1" />
    <div align="start" class="space-content">
      <a-dropdown position="br">
        <a-button shape="round">
          源语言：{{ fromLanguage }}
          <template #icon>
            <icon-flowbite:angle-down-outline />
          </template>
        </a-button>
        <template #content>
          <a-doption
            v-for="(value, key) in fromLanguageOptions"
            :key="key"
            @click="selectFromLanguage(key)"
          >
            {{ key }}
          </a-doption>
        </template>
      </a-dropdown>

      <icon-octicon:arrow-switch-24 />

      <a-dropdown position="br">
        <a-button shape="round"
          >目标语言：{{ toLanguage }}
          <template #icon>
            <icon-flowbite:angle-down-outline />
          </template>
        </a-button>
        <template #content>
          <a-doption
            v-for="(value, key) in toLanguageOptions"
            :key="key"
            @click="selectToLanguage(key)"
            >{{ key }}</a-doption
          >
        </template>
      </a-dropdown>
      <a-button class="button" shape="round" type="primary" @click="trans" :loading="loading">翻译</a-button>
    </div>
    <a-textarea class="text2" placeholder="翻译结果" allow-clear v-model="text2" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text1 = ref('')
const text2 = ref('')
const fromLanguage = ref('自动检测')
const toLanguage = ref('中文')
const loading = ref(false)

const fromLanguageOptions = {
  自动检测: 'auto',
  中文: 'zh',
  英文: 'en',
  日语: 'jp',
  韩语: 'kor',
  粤语: 'yue',
  法语: 'fra',
  西班牙语: 'spa',
  俄语: 'ru'
}

const toLanguageOptions = Object.fromEntries(
  Object.entries(fromLanguageOptions).filter(([key]) => key !== '自动检测')
)

function selectFromLanguage(language) {
  fromLanguage.value = language
}

function selectToLanguage(language) {
  toLanguage.value = language
}

async function trans() {
  if (!text1.value) {
    text2.value = ''
    return
  }
  loading.value = true

  const response = await fetch('https://anycat.top/api/v1/trans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromLanguageOptions[fromLanguage.value],
      to: toLanguageOptions[toLanguage.value],
      content: text1.value
    })
  })

  const data = await response.json()
  if (data.status === 200) {
    let translations = data.data.trans_result.map((result) => result.dst)
    const translationText = translations.join('\n')

    text2.value = translationText
  } else {
    text2.value = '翻译失败'
  }

  loading.value = false
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
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.button {
  width: 150px;
  left: 70px;
}
</style>
