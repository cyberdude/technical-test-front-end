<template>
  <div id="app">
    <fm-header />
    <router-view
      :key="$route.path"
      :offpistes="offpistes"/>
    <fm-footer />
  </div>
</template>

<script>
import data from '@/data/off-pistes.json'
import FmHeader from '@/components/globals/FmHeader'
import FmFooter from '@/components/globals/FmFooter'

export default {
  name: 'app',
  data () {
    return {
      offpistes: []
    }
  },
  mounted () {
    this.offpistes = data
  },
  components: {
    FmHeader,
    FmFooter
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
}
</style>
