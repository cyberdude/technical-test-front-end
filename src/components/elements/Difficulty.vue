<template>

  <div>
    Difficulty:
    <b-badge
      :variant="getSeverityClass">{{difficulty}}</b-badge>
  </div>

</template>

<script>
import bBadge from 'bootstrap-vue/es/components/badge/badge'

export default {
  name: 'Difficulty',
  props: {
    difficulty: Number
  },
  computed: {
    getSeverityClass () {
      const difficulty = this.difficulty
      var finalClass = 'success'

      if (difficulty > 2 && difficulty < 4) {
        finalClass = 'warning'
      } else if (difficulty >= 4) {
        finalClass = 'danger'
      }
      return finalClass
    }
  },
  components: {
    bBadge
  }
}
</script>

<style lang="scss" scoped>

</style>
