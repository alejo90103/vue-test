
<script>

import {mapState} from 'vuex'
import _ from 'lodash'
import moment from 'moment'
import Posts from './Posts'
import Search from './Search'

export default {
  components: {
    Posts,
    Search
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 center">
        <ul class="nav nav-pills nav-pills-icons" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" href="#cell-info" role="tab" data-toggle="tab">
              <i class="material-icons">wysiwyg</i> Todos los Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#nauta-info" role="tab" data-toggle="tab">
              <i class="material-icons">grade</i> Consultar Valoración
            </a>
          </li>
        </ul>
        <div class="tab-content tab-space col-lg-12">
          <div class="tab-pane active" id="cell-info">
            <Posts></Posts>
          </div>
          <div class="tab-pane" id="nauta-info">
            <Search></Search>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
