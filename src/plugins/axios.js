import axios from 'axios';

const instance = axios.create({
  // 在这里可以添加一些全局的配置
});

export default {
  install: (app) => {
    app.config.globalProperties.$axios = instance;
  }
};
