<template>
  <form action="" class="adicionar-produto">
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" v-model="produto.nome" />
    <label for="preco">Preço (R$)</label>
    <input type="number" name="preco" id="preco" v-model="produto.preco" />
    <label for="fotos">Fotos</label>
    <input type="file" name="fotos" id="fotos" ref="fotos" />
    <label for="descricao">Descrição</label>
    <textarea
      name="descricao"
      id="descricao"
      v-model="produto.descricao"
    ></textarea>
    <button class="btn" @click.prevent="adicionarProduto">
      Adicionar Produto
    </button>
  </form>
</template>

<script>
import { api } from '@/services.js';

export default {
  data() {
    return {
      produto: {
        nome: '',
        preco: '',
        descricao: '',
        fotos: null,
      },
    };
  },
  methods: {
    formatarProduto() {
      this.produto.usuario_id = this.$store.state.usuario.id;
    },
    adicionarProduto() {
      this.formatarProduto();

      api.post('/produto', this.produto).then(() => {
        this.$store.dispatch('getUsuarioProdutos');
      });
    },
  },
};
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
