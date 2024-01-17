<template>
    <span class="center">{{centerText}}</span>
</template>

<script>
export default {
    props: ["centerText"]
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}

.link {
  color: #000;
  text-decoration: underline;
}
</style>