<template>
    <button class="login-btn">{{ btnText }}</button>
</template>

<script>
export default {
    props: ["btnText"]
}
</script>

<style lang="scss" scoped>
.login-btn {
    background-color: #0FA958;
    color: #fefefe;
    padding: 8.5px 0;
    border: none;
    border-radius: 24px;
}
</style>