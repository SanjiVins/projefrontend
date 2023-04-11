<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      to="/"
      tag="a"
      class="navbar-brand">
      <a>Ana Sayfa</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <router-link
          to="/getAll"
          tag="li"
          class="nav-item">
          <a class="nav-link">Ürünleri Getir<span class="sr-only">(current)</span></a>
        </router-link>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
