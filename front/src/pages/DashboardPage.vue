
<script>

import Info from './../components/dashboard/Info'

export default {
  components: {
    Info
  }
}
</script>

<template>
  <div class="main main-raised" id="dashboard-wrapper">
    <div class="section section-basic">
      <Info></Info>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .main-raised {
    margin: -200px 60px 0px;
    border-radius: 6px;
    box-shadow: 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  }
</style>
