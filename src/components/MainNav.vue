<template>
  <div>
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse row justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Présentation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/my-projects">Mes projets</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-me">Me contacter</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolledTop: true,
    };
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) this.scrolledTop = false;
      else this.scrolledTop = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

// NAVBAR
.navbar-custom {
  background-color: #127196;
}

</style>
