<template>
  <form>
    <input type="text" name="busca" id="busca" v-model="busca" />
    <button @click.prevent="buscarProdutos" id="lupa">Buscar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({
        query: {
          q: this.busca,
        },
      });
    },
  },
};
</script>

<style></style>
