<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-6 home-logo" @click="gotoHome()">
          <img src="@/assets/logo.png">
        </div>

        <div class="col-6">
          <div id="fm_menu">
            <ul>
              <li><router-link :to="'/'">Off-Pistes</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FmHeader',
  methods: {
    gotoHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

#header {
  border-bottom: 1px solid #ccc;
  height: 60px;
  margin-bottom: 30px;

  .container {
    height: 100%;
    .row {
      height: 100%;
      align-items: center;

      .home-logo {
        font-size: 1.2rem;
        img {
          width: 150px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

#fm_menu {
  ul {
    float: right;
    list-style-type: none;
    margin-bottom: 0;
    li {
      float: left;
      margin-right: 20px;
      a.router-link-exact-active {
        opacity: .5;
      }
    }
  }
}

</style>
