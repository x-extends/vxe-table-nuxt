<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/vxe-table-nuxt">
    <img src="https://img.shields.io/npm/v/vxe-table-nuxt.svg">
  </a>
  <a href="https://npmcharts.com/compare/vxe-table-nuxt?minimal=true">
    <img src="https://img.shields.io/npm/dm/vxe-table-nuxt.svg">
  </a>
</p>

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
    'vxe-pc-ui-nuxt',
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
