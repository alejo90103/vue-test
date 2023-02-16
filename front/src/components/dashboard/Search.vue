<script>

import {mapState} from 'vuex'

export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState({
      rating: state => state.postStore.rating
    })
  },
  methods: {
    handleRating(text) {
      this.$store.dispatch('searchRatingByText', text)
    },
  }
}
</script>

<template>
  <div>
    <b-container fluid class="text-center mt-4">
      <b-row>
        <b-col lg="6" sm="6" md="6" class="my-1 mx-auto">
          <b-input-group size="sm">
            <b-form-input
              v-model="text"
              type="search"
              placeholder="Escriba una palabra o frase. (Ej: 'sunt')"
            ></b-form-input>
              <div>
                <b-spinner label="Loading..."></b-spinner>
              </div>
              <b-button variant="primary" :disabled="!text" @click="handleRating(text)" class="p-2 ml-2">Valorar</b-button>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-5">
        <b-row class="b-avatar badge-secondary rounded-circle align-content-center" style="width: 250px; height: 250px;font-size: 60px">
          <b-col lg="6" sm="6" md="6" class="my-1 mx-auto">
            {{text ? rating : 0}}
          </b-col>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="css" scoped>
</style>
