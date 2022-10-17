<template>
  <div id="app">
    <p>Meu Paragrafo</p>
    <blockquote>
      Minha Citação
    </blockquote>
    <details>
      <summary>Meu Resumo</summary>
      <p>Meu conteudo</p>
    </details>
  </div>

</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #47a74f;
  margin-top: 60px;
}
</style>

