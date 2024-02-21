<template>
  <div>
    <div>
      <label for="inputText">输入内容：</label>
      <input v-model="inputText" id="inputText" type="text" placeholder="请输入要加密的内容">
    </div>
    <div>
      <button @click="encrypt">加密</button>
    </div>
    <div>
      <label for="outputText">加密结果：</label>
      <textarea v-model="outputText" id="outputText" rows="4" cols="50" readonly></textarea>
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
        const response = await fetch('http://127.0.0.1:8080/api/v1/base_encode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content: this.inputText })
        });
        const data = await response.json();
        this.outputText = data.data;
      } catch (error) {
        console.error('加密请求出错：', error);
      }
    }
  }
};
</script>
