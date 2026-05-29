import { defineNuxtConfig } from 'nuxt/config'
import VxeUITable from '../src/module'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-05',
  modules: [VxeUITable],
  vxeTableSetting: {
  }
})
