[![github star](https://img.shields.io/github/stars/x-extends/vxe-table-nuxt.svg)](https://github.com/x-extends/vxe-table-nuxt/stargazers)
[![gitee star](https://gitee.com/x-extends/vxe-table-nuxt/badge/star.svg)](https://gitee.com/x-extends/vxe-table-nuxt/stargazers)
[![gitcode star](https://gitcode.com/x-extends/vxe-table-nuxt/star/badge.svg)](https://gitcode.com/x-extends/vxe-table-nuxt/stargazers)
[![npm version](https://img.shields.io/npm/v/vxe-table-nuxt.svg?style=flat-square)](https://www.npmjs.com/package/vxe-table-nuxt)
[![NodeJS with Webpack](https://github.com/x-extends/vxe-table-nuxt/actions/workflows/webpack.yml/badge.svg)](https://github.com/x-extends/vxe-table-nuxt/actions/workflows/webpack.yml)
[![gzip size: JS](http://img.badgesize.io/https://unpkg.com/vxe-table-nuxt/lib/index.umd.min.js?compression=gzip&label=gzip%20size:%20JS)](https://unpkg.com/vxe-table-nuxt/lib/index.umd.min.js)
[![npm downloads](https://img.shields.io/npm/dt/vxe-table-nuxt.svg?style=flat-square)](https://npm-stat.com/charts.html?package=vxe-table-nuxt)
[![issues](https://img.shields.io/github/issues/x-extends/vxe-table-nuxt.svg)](https://github.com/x-extends/vxe-table-nuxt/issues)
[![issues closed](https://img.shields.io/github/issues-closed/x-extends/vxe-table-nuxt.svg)](https://github.com/x-extends/vxe-table-nuxt/issues?q=is%3Aissue+is%3Aclosed)
[![pull requests](https://img.shields.io/github/issues-pr/x-extends/vxe-table-nuxt.svg)](https://github.com/x-extends/vxe-table-nuxt/pulls)
[![pull requests closed](https://img.shields.io/github/issues-pr-closed/x-extends/vxe-table-nuxt.svg)](https://github.com/x-extends/vxe-table-nuxt/pulls?q=is%3Apr+is%3Aclosed)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

# Vxe Table Nuxt

> [Vxe Table](https://vxeui.com) module for [Nuxt](https://nuxt.com)

## Features

- Automatically import components and styles on demand.

## Installation

```bash
npm install vxe-table-nuxt -D
```

## Configuration

> [!WARNING]
> At present, the method cannot automatically obtain the context, and you need to manually configure [installMethods](#installmethods) in the options.

```ts
export default defineNuxtConfig({
  modules: [
    'vxe-table-nuxt',
    'vxe-table-nuxt'
  ],
  vxeTableSetting: { /** Options */ }
})
```

## Usage

```vue
<template>
  <div>
    <vxe-table :data="tableData">
      <vxe-column type="seq" title="Seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="address" title="Address"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
      ]
    }
  }
}
</script>
```

Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Development

- Run `npm run update i` to install the dependencies.
- Run `npm run run` to start playground in development mode.
- Run `npm run build` to build this project.
