<script>
import {mapState} from 'vuex'
import TopMenu from './components/TopMenu'
import Banner from './components/Banner'
import Footer from './components/Footer'

export default {
  components: {
    TopMenu,
    Banner,
    Footer
  }
}

</script>

<template>
  <div>
    <Top-Menu></Top-Menu>
    <Banner></Banner>
    <Router-View></Router-View>
    <Footer></Footer>
  </div>
</template>

<style lang="sass">
  @import './assets/css/global.scss'
</style>
