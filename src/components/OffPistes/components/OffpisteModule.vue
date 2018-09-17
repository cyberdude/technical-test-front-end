<template>
  <div
    class="col-12 col-md-3 piste"
    @click="$router.push({name: 'OffPisteDetail', params: {id:piste.id}})">
      <div>
        <h4>{{piste.name}} </h4>
        <ratings :stars="piste.rating" />
        <difficulty :difficulty="piste.ski_difficulty" />
        <p>{{piste.short_description}}</p>
        <a href="#" @click.prevent="()=>{}">View Off-Piste ></a>
    </div>
  </div>
</template>

<script>
import Ratings from '@/components/elements/Ratings'
import Difficulty from '@/components/elements/Difficulty'

export default {
  name: 'OffpisteModule',
  props: {
    piste: Object
  },
  components: {
    Ratings,
    Difficulty
  }
}
</script>

<style lang="scss" scoped>
.piste {
  margin-bottom: 30px;
  padding: 10px;
  cursor: pointer;

  p {
    margin-top: 20px;
  }
}
</style>
