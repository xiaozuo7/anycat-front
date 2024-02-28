import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver, VueUseComponentsResolver, VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers'
// icon 组件
import Icons from 'unplugin-icons/vite'
// icon 自动引入解析器
import IconsResolver from 'unplugin-icons/resolver'
// icon 加载 loader
import { FileSystemIconLoader } from 'unplugin-icons/loaders'




// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    AutoImport({
      // 需要去解析的文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // imports 指定自动引入的包位置（名）
      imports: ['vue', 'pinia', 'vue-router',],
      // 生成相应的自动导入json文件。
      eslintrc: {
        // 启用
        enabled: true,
        // 生成自动导入json文件位置
        filepath: './.eslintrc-auto-import.json',
        // 全局属性值
        globalsPropValue: true
      },
      resolvers: [ArcoResolver()]
    }),
    Components({
      // imports 指定组件所在目录，默认为 src/components
      dirs: ['src/components/', 'src/view/', '@vueuse/core'],
      // 需要去解析的文件
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ArcoResolver({
          sideEffect: true
        }),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        // icon组件自动引入解析器使用
        IconsResolver({
          prefix: "icon",
          customCollections: ["user", "home"],
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        // user图标集，给svg文件设置 fill="currentColor" 属性，使图标的颜色具有适应性
        user: FileSystemIconLoader("src/assets/svg/user", (svg) => 
          svg.replace(/^<svg /, '<svg fill="currentColor" ')),
        // home 模块图标集
        home: FileSystemIconLoader("src/assets/svg/home", (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
      autoInstall: true,
    }),
  ]
})
