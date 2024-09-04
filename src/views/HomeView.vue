<script setup>
import Cards from '../components/Card.vue'
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="title">
        WELCOME TO FC 24 PLAYER INFO
      </div>
      <div>
        <Cards />
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrado vertical */
  align-items: center; /* Centrado horizontal */
  min-height: 100vh; /* Altura mínima para centrar verticalmente */
  padding-bottom: 40px;
  overflow: hidden;
}

.title {
  padding: 50px;
  text-align: center;
  font-size: 40px;
  color: white;
  font-style: italic;
  font-weight: bold;
}

@media only screen and (min-width: 767px) {
  .title {
    font-size: 50px;
  }
}
</style>
