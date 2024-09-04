<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer d-flex justify-content-center">
    <div class="row g-0">
      <div class="col-4">
        <div class="player-card" aria-label="Cristiano Ronaldo">
          <RouterLink to="/cr7">
            <img src="../assets/PlayerCards/CR7.png" alt="Cristiano Ronaldo" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Messi">
          <RouterLink to="/messi">
            <img src="../assets/PlayerCards/Messi.png" alt="Lionel Messi" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Kylian Mbappé">
          <RouterLink to="/mbappe">
            <img src="../assets/PlayerCards/Mbappe.png" alt="Kylian Mbappé" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Haaland">
          <RouterLink to="/haaland">
            <img src="../assets/PlayerCards/Haaland.png" alt="Erling Haaland" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Neymar Jr">
          <RouterLink to="/neymar">
            <img src="../assets/PlayerCards/Neymar.png" alt="Neymar Jr" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Jamal Musiala">
          <RouterLink to="/musiala">
            <img src="../assets/PlayerCards/Musiala.png" alt="Jamal Musiala" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Pedri">
          <RouterLink to="/pedri">
            <img src="../assets/PlayerCards/Pedri.png" alt="Pedri" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Jude Bellingham">
          <RouterLink to="/jude">
            <img src="../assets/PlayerCards/Bellingham.png" alt="Jude Bellingham" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4">
        <div class="player-card" aria-label="Antonio Rudiger">
          <RouterLink to="/rudiger">
            <img src="../assets/PlayerCards/Rudiger.png" alt="Antonio Rudiger" width="100px" height="auto">
          </RouterLink>
        </div>
      </div>
      <div class="col-4 ps-1">
        <div class="player-card" aria-label="Luis Díaz">
          <RouterLink to="/diaz">
            <img src="../assets/PlayerCards/Diaz.png" alt="Luis Díaz" width="95px" height="auto">
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
  padding: 0;
}

.player-card {
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease-in-out;
  margin: auto;
}

.player-card:hover {
  transform: scale(1.2);
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
