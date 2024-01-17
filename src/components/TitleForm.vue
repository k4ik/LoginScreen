<template>
    <p class="title">{{ title }}</p>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 22px;
  font-weight: bold;
  color: #1E1E1E;
  line-height: 1%;
}
</style>