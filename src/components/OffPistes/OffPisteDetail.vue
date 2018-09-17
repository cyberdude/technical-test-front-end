<template>
  <div id="off_piste_lp">

    <div class="container">
      <div class="row" id="title_area">
        <div class="col-12 col-md-6">
          <h1>
            {{offpiste.name}}
          </h1>
           <ratings :stars="offpiste.rating" />
        </div>

        <div class="col-12 col-md-6">
          <div>
            <difficulty :difficulty="offpiste.ski_difficulty" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <GmapMap
                :center="{lat: Number(offpiste.geo_data.coordinates[0][0][0]), lng: Number(offpiste.geo_data.coordinates[0][0][1])}"
                :zoom="15"
                map-type-id="terrain"
                style="width: 100%; height: 400px"
                v-if="offpiste.geo_data"
            >
            <gmap-polyline v-if="path.length > 0" :path="path" :editable="true"
              ref="polyline">
            </gmap-polyline>
          </GmapMap>
        </div>
      </div>

      <div class="row" id="piste_description">
        <div class="col-12">
          <p>{{offpiste.description}}</p>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import Find from 'lodash/find'
import Ratings from '@/components/elements/Ratings'
import Difficulty from '@/components/elements/Difficulty'

export default {
  name: 'OffPisteDetail',
  props: {
    offpistes: Array
  },
  computed: {
    google: gmapApi,
    path () {
      return this.offpiste.geo_data.coordinates[0].map(path => {
        return {
          lat: path[0],
          lng: path[1]
        }
      })
    },
    offpiste () {
      const id = this.$route.params.id
      const offpiste = Find(this.offpistes, {id: parseInt(id)})
      return offpiste || {}
    }
  },
  components: {
    Ratings,
    Difficulty
  }
}
</script>

<style lang="scss" scoped>

#title_area {
  margin-bottom: 30px;

  > div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

h1 {
  margin-bottom: 0;
}

#piste_description {
  margin-top: 30px;
}
</style>
