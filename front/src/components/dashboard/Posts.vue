<script>

import {mapState} from 'vuex'

export default {
  created () {
    this.$store.dispatch('loadPosts')
  },
  watch: {
    postStore: function () {
      this.totalRows = this.postStore.length
    }
  },
  data () {
    return {
      fields: [
        { key: 'id', label: 'Id de Post', sortable: true, sortDirection: 'desc' },
        { key: 'userName', label: 'Usuario', sortable: true, class: 'text-center' },
        { key: 'title', label: 'Título', sortable: false, class: 'text-start' },
        { key: 'body', label: 'Cuerpo', sortable: false, class: 'text-start' }
      ],
      transProps: {
        name: 'flip-list'
      },
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      selected: [],
      hover: true,
      bordered: true,
      headVariant: 'light',
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      post: {
        id: '',
        idUser: '',
        title: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapState({
      postStore: state => state.postStore.posts,
    }),
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted () {
    // Set the initial number of posts
    this.totalRows = this.postStore.length
  },
  methods: {
    handleDownloadRating () {
      this.$store.dispatch('downloadRating')
    },
    onFiltered (filteredPosts) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredPosts.length
      this.currentPage = 1
    },
  }
}
</script>

<template>
  <div>
    <b-container fluid>
    
      <b-button variant="primary" @click="handleDownloadRating" style="float: right; margin-bottom: 25px;">
        Descargar Valoraciones
      </b-button>
      <b-row>
        <b-col sm="6" md="3" class="my-1">
          <b-form-group
            label="Mostrar"
            label-cols-sm="6"
            label-cols-md="4"
            label-cols-lg="4"
            label-align-sm="right"
            label-size="sm"
            label-for="perPageSelect"
            class="mb-0"
          >
            <b-form-select
              v-model="perPage"
              id="perPageSelect"
              size="sm"
              :options="pageOptions"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col lg="6" sm="6" md="6" class="my-1">
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Buscar"
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
              </b-input-group-append>
            </b-input-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <div class="table-responsive-sm">
        <b-table
          id = "table-transition-example"
          ref="selectableTable"
          show-empty
          striped
          small
          stacked="sm"
          :hover="hover"
          :bordered = "bordered"
          :head-variant="headVariant"
          :items="postStore"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filterIncludedFields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          sort-icon-left
          :tbody-transition-props="transProps"
          primary-key="created_at"
          @filtered="onFiltered"
        >
          <template v-slot:row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              </ul>
            </b-card>
          </template>

        </b-table>
      </div>

      <b-row>
        <b-col sm="12" md="12" class="my-1 center">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }

  table#table-transition-example .flip-list-move {
    transition: transform 1s;
  }
</style>
