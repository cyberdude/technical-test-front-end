<template>

  <div class="stars">
    <span class="rating">Rating: </span>

    <span
      class="fa fa-star"
      v-for="(star, index) in 5"
      :class="{checked: (stars > index)}"
      :key="index">
    </span>
  </div>

</template>

<script>

export default {
  name: 'Ratings',
  props: {
    stars: Number
  }
}
</script>

<style lang="scss" scoped>
.stars {
  font-size: .9rem;
   .rating {
      font-weight: bold;
      display: inline-block;
      margin-right: 5px;
    }
  .checked {
    color: orange;
  }
}
</style>
