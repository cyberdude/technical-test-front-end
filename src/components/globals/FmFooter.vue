<template>
  <div id="footer">
    <div class="container">
      <div class="col-12">
        <img src="@/assets/logo-white.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FmFooter',
  methods: {
  }
}
</script>

<style lang="scss" scoped>

#footer {
  margin-top: 60px;
  background: #000;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: #fff;

  img {
    width: 80px;
  }
}
</style>
