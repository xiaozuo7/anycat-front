import IconMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline'

export const menuRouter = [
  {
    path: 'devtools',
    name: 'DevTools',
    meta: {
      title: '工具菜单',
      icon: markRaw(IconMaterialSymbolsCodeBlocksOutline)
    },
    redirect: { name: 'Base64' },
    children: [
      {
        path: 'base64',
        name: 'Base64',
        meta: {
          title: 'Base64加解密'
        },
        component: () => import('@/views/Base64.vue')
      },
      {
        path: 'translate',
        name: 'translate',
        meta: {
          title: '在线翻译'
        },
        component: () => import('@/views/Translate.vue')
      }
    ]
  }
]

/**
 * @description 菜单路由数组 format
 * @param { Array } router 路由数组
 * @param { String } parentPath 父级路由 path
 * @return { Array }
 */
export const menuRouterFormat = (router, parentPath) => {
    return router.map(item => {
      // 拼接路由，例：'devtools' -> '/devtools'  'base64' -> '/devtools/base64'
      item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`
  
      // 存在 children 属性，且 children 数组长度大于 0，开始递归
      if (item.children && item.children.length > 0) {
        item.children = menuRouterFormat(item.children, item.path)
      }
  
      return Object.assign({}, item, item.meta || {})
    })
  }
  
  // 解析后 路由菜单列表
  export const menuRouterFormatList = menuRouterFormat([...menuRouter])
