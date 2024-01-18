<template>
  <div class="container-screen">
    <logo-img/>

    <form class="form">
      <title-form title="Novo usuário"/>
      <input-form inputText="Digite seu nome completo" inputImg="https://media.discordapp.net/attachments/1129232473470029864/1197177513546354718/user-round.png?ex=65ba5171&is=65a7dc71&hm=096dfc2a882d408638fb037a0af2145a737229590d56ece7000dba76ec057536&=&format=webp&quality=lossless" inputType="text" />
      <input-form inputText="Digite seu email" inputImg="https://media.discordapp.net/attachments/1129232473470029864/1197176580980613130/at-sign.png?ex=65ba5093&is=65a7db93&hm=e0e39613826d8d66870586fa27ef7ae84c4875a37d10e9dea48d6e0d3a372cc4&=&format=webp&quality=lossless" inputType="email" />
      <input-form inputText="Digite sua senha" inputImg="https://media.discordapp.net/attachments/1129232473470029864/1197177513265348628/lock.png?ex=65ba5171&is=65a7dc71&hm=7d2a20a9e5bf47fbbf39190f354d68fa4aec8f0b512f1c181cabf911214459ed&=&format=webp&quality=lossless" inputType="password" />
      <button-form btnText="Cadastrar" @click.prevent/>
      <center-text centerText="ou"/>
      <linkedin-button/>
      <p class="center">Já possui uma conta? <RouterLink to="/" class="link">Faça login</RouterLink></p>
    </form>
</div>
</template>

<script>
import LogoImg from '../components/LogoImg.vue';
import TitleForm from '../components/TitleForm.vue';
import InputForm from '../components/InputForm.vue';
import ButtonForm from '../components/ButtonForm.vue';
import LinkedinButton from '../components/LinkedinButton.vue';
import CenterText from '../components/CenterText.vue';

export default {
  components: {
    LogoImg,
    TitleForm,
    InputForm,
    ButtonForm,
    LinkedinButton,
    CenterText
  }
}
</script>

<style lang="scss">
  .container-screen {
    margin: 91px auto 218px;
    width: 100%;
    max-width: 393px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;

    .form {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .center {
        text-align: center;
      }

      .link {
        color: #000;
        text-decoration: underline;
      }
    }
  }
</style>