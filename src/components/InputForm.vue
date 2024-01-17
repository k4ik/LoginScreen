<template>
    <div class="container-input">
        <img :src="inputImg" alt="">
        <input type="text" :placeholder="inputText">
    </div>
</template>

<script>
export default {
    props: ["inputImg", "inputText"]
}
</script>

<style lang="scss" scoped>
.container-input {
    display: flex;
    align-items: center;
    gap: 10px;
    &:nth-child(1) {
    margin-bottom: 20px;
    }

    input {
        width: 100%;
        outline: none;
        border: none;
        padding-bottom: 10px;
        border-bottom: 1px solid #D2D2D2;

        &::placeholder {
            color: #D2D2D2;
            font-weight: 700;
        }
    }
}
</style>