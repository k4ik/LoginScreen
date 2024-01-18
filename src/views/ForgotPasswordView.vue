<template>
    <div class="container-screen">
        <back-button/>
        <img src="../assets/images/forgot-password.svg" alt="" class="svg">
        <form class="form">
            <title-form title="Esqueceu sua senha?" />
            <input-form inputText="Digite sua nova senha" inputImg="https://media.discordapp.net/attachments/1129232473470029864/1197177513265348628/lock.png?ex=65ba5171&is=65a7dc71&hm=7d2a20a9e5bf47fbbf39190f354d68fa4aec8f0b512f1c181cabf911214459ed&=&format=webp&quality=lossless" inputType="password" />
            <input-form inputText="Repita a senha" inputImg="https://media.discordapp.net/attachments/1129232473470029864/1197177513265348628/lock.png?ex=65ba5171&is=65a7dc71&hm=7d2a20a9e5bf47fbbf39190f354d68fa4aec8f0b512f1c181cabf911214459ed&=&format=webp&quality=lossless" inputType="password" />
            <button-form btnText="Mudar senha" @click.prevent/>
        </form>
    </div>
</template>

<script>
    import TitleForm from '@/components/TitleForm.vue';
    import InputForm from '../components/InputForm.vue';
    import ButtonForm from '../components/ButtonForm.vue';
    import BackButton from '../components/BackButton.vue';

    export default {
        components: {
            TitleForm,
            InputForm,
            ButtonForm,
            BackButton
        }
    }
</script>

<style lang="scss">
    .svg {
        width: 221px;
        margin: 24px auto 54px;
    }
</style>