<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <TableOfContent :data="data" />
  </div>
</template>

<script>
import contentMap from '@/contentMap'

export default {
  name: 'Home',
  components: {
    TableOfContent: () => import('@/views/home/components/TableOfContent')
  },
  computed: {
    data() {
      return contentMap
    }
  }
}
</script>
