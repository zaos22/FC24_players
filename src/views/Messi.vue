<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Messi = "Lionel Messi is an Argentine footballer, born on June 24, 1987, in Rosario, Argentina. Widely regarded as one of the greatest players in the history of football, Messi is known for his extraordinary dribbling, precise passing, and prolific goal-scoring ability. Throughout his career, he has won numerous titles, including seven Ballon d'Or awards, highlighting his dominance in the sport.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="src/assets/PlayerCards/Messi.png" v-bind:textOverlay="Messi" playerName="Lionel Messi" />
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
