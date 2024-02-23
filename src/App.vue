<template>
  <div>
    <input v-model="inputText" placeholder="请输入要加密的内容" />
    <button @click="encrypt">加密</button>
    <div>
      <textarea v-model="outputText" placeholder="加密后的结果会显示在这里" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      outputText: ''
    };
  },
  methods: {
    async encrypt() {
      try {
        const response = await this.$axios.post('http://139.159.249.79/api/v1/base_encode', {
          content: this.inputText
        });
        this.outputText = response.data.data;
      } catch (error) {
        console.error('加密请求出错', error);
      }
    }
  }
};
</script>
