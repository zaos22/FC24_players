<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Diaz = 'Luis Díaz, commonly known as "Lucho" Díaz, is a Colombian footballer born on January 13, 1997, in La Guajira, Colombia. Known for his explosive pace, exceptional dribbling, and goal-scoring ability, Díaz has quickly become one of the most exciting wingers in European football.';
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="/assets/PlayerCards/Diaz.png" v-bind:textOverlay="Diaz" playerName="Luis Díaz" />
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
  align-items: center;
  padding-bottom: 40px;
}
</style>
