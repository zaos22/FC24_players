<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer  d-flex justify-content-center">
    <div class="row g-0">
      <div class="col-4">
        <div class="player-card" aria-label="Kylian Mbappé">
          <RouterLink to="/mbappe">
            <img src="../assets/PlayerCards/Mbappe.png" alt="Kylian Mbappé" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 20px 0;
}

.player-card {
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease-in-out;
  margin: auto;
}

.player-card:hover {
  transform: scale(1.5);
}

.col-4 {
  flex: 0 0 auto;
  max-width: 35%;
  display: flex;
  justify-content: center;
}


@media only screen and (min-width: 767px) {
  .col-4 {
    max-width: 10%;
  }
}
</style>
