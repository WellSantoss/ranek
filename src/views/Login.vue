<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input v-model="login.email" type="email" name="email" id="email" />
      <label for="senha">Senha</label>
      <input v-model="login.senha" type="password" name="senha" id="senha" />
      <button @click.prevent="logar" class="btn">Logar</button>
    </form>
    <p class="perdeu">
      Perdeu a senha? <a href="/" target="_blank">Clique aqui</a>
    </p>
    <CadastrarLogin />
  </section>
</template>

<script>
import CadastrarLogin from "@/components/CadastrarLogin.vue";

export default {
  name: "Login",
  components: {
    CadastrarLogin,
  },
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    logar() {},
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
