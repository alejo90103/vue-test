<template>
  <footer class="footer" data-background-color="black">
    <div class="container">
      <div class="copyright float-right">
        &copy;
        Todos los derechos reservados.
        <router-link :to="{name: 'dashboard'}">Vue Test</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
}
</script>

<style lang="css" scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
</style>
