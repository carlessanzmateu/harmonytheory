<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <TableOfContent :data="data" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    TableOfContent: () => import('@/views/home/components/TableOfContent')
  },
  data: () => ({
    data: {
      fundamentals: {
        basicNotation: {
          title: {
            componentType: 'topTitle',
            translationKey: 'FOO.BAR.QUZ'
          }
        }
      }
    }
  })
}
</script>
