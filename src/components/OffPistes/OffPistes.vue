<template>
  <div>
    <div class="container">
      <div id="sorting_module">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2>List of Off Pites</h2>
          </div>
          <div class="col-12 col-md-6">
            Sort by:
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="activateSort('name')"
              :class="{active: (sortingBy === 'name')}">Name</button>
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="activateSort('ski_difficulty')"
              :class="{active: (sortingBy === 'ski_difficulty')}">Difficulty</button>

              <div class="btn-group" :class="{show: openSort}" @click="openSort = !openSort">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{sortingOrder}}
                </button>

                <div class="dropdown-menu" :class="{show: openSort}">
                  <a class="dropdown-item" href="#" @click="changeOrder('asc')">Asc</a>
                  <a class="dropdown-item" href="#" @click="changeOrder('desc')">Desc</a>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div id="offpiste_list">
        <div class="row mr-0">
          <OffpisteModule
            v-for="(piste, index) in this.sortedPistes"
            :key="index"
            :piste="piste"
          />
        </div>

        <div class="row" id="load_more">
          <div class="col-12">
            <div class="loaded-amount">Showing {{sortedPistes.length}} of {{offpistes.length}}</div>
            <button type="button"
              class="btn btn-outline-primary"
               @click="loadMore()"
              :disabled="allLoaded">Load more</button>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import OrderBy from 'lodash/orderBy'
import OffpisteModule from './components/OffpisteModule'

export default {
  name: 'OffPiste',
  props: {
    offpistes: Array
  },
  data () {
    return {
      sortingBy: 'name',
      sortingOrder: 'asc',
      openSort: false,
      currentLoad: 1
    }
  },
  methods: {
    changeOrder (order) {
      this.sortingOrder = order
    },
    activateSort (type) {
      this.sortingBy = type
    },
    loadMore () {
      this.currentLoad += 1
    }
  },
  computed: {
    google: gmapApi,
    allLoaded () {
      return this.sortedPistes.length === this.offpistes.length
    },
    sortedPistes () {
      const trimmedOrder = OrderBy(this.offpistes,
        [this.sortingBy],
        [this.sortingOrder]
      ).splice(0, this.currentLoad * 30)

      return trimmedOrder
    }
  },
  components: {
    OffpisteModule
  }
}
</script>

<style lang="scss" scoped>

#sorting_module {
  margin-top: 30px;
  margin-bottom: 30px;
  .row {
    > div:last-child {
      text-align: right;

      button {
        text-transform: capitalize;
      }

      .dropdown-menu {
        margin-top: 10px;
        left: auto;
        right: 0;
      }
    }
  }
}

.pagination-control {
  text-align: center;
  margin-bottom: 30px;
}

#load_more {
  margin-bottom: 30px;
  text-align: center;

  .loaded-amount {
    margin-bottom: 15px;
  }
}
</style>
