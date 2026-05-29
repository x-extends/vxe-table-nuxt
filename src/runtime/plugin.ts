import VxeUITable from 'vxe-table'
import { ModuleOptions } from '../types'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const moduleOptions = config.public.vxeTableSetting as ModuleOptions

  // 应用全局配置
  if (moduleOptions.globalConfig) {
    VxeUITable.setConfig(moduleOptions.globalConfig)
  }

  nuxtApp.vueApp.use(VxeUITable)
})
