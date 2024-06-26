import type { App } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局引入Element Plus组件
export const setupElementPlus = (app: App<Element>) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue))
    app.component(key, component)
  app.use(ElementPlus)
}
