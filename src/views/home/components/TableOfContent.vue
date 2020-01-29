<template>
  <div>
    <h1>Table Of Content</h1>
    <section class="items-content">
      <h2>Fundamentals</h2>
      <ul>
        <li>
          <a class="link" @click="goToContent(data.fundamentals.basicNotation)">
            Basic notation
          </a>
        </li>
        <li>
          <a class="link" @click="goToContent(data.fundamentals.meter)">
            Meter
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { ROUTES } from '@/constants/routes'

export default {
  name: 'TableOfContent',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    goToContent(value) {
      this.$router.push({
        name: ROUTES.CONTENT.name,
        params: { titleAndContent: value }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.items-content {
  width: 40%;
  margin: 0 auto;
  text-align: left;

  .link {
    cursor: pointer;
    color: #42b983;

    &:hover {
      font-weight: bold;
    }
  }
}
</style>
