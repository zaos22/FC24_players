<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const CR7 = "Cristiano Ronaldo, also known as CR7, is a Portuguese footballer regarded as one of the greatest of all time. Known for his speed, technical skill, and goal-scoring ability, he has won multiple titles, including five Ballon d'Or awards and leagues in England, Spain, Italy, and Saudi Arabia.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="/assets/PlayerCards/CR7.png" v-bind:textOverlay="CR7" playerName="Cristiano Ronaldo" />
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
