<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>

    <ProdutoBusca />
    <ProdutoLista />
  </section>
</template>

<script>
import ProdutoBusca from "@/components/ProdutoBusca.vue";
import ProdutoLista from "@/components/ProdutoLista.vue";

export default {
  name: "Home",
  components: {
    ProdutoBusca,
    ProdutoLista,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>
