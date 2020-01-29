<template>
  <div>
    <h1>Table Of Content</h1>
    <section class="items-content">
      <h2>Fundamentals</h2>
      <ul>
        <li>
          <a class="link" @click="goToContent()">Basic notation</a>
        </li>
        <li>
          <a class="link" @click="goToContent()">Meter</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TableOfContent',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    goToContent() {}
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
