<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'
import HaalandCard from '../assets/PlayerCards/Haaland.png'

const Haaland = "Erling Haaland is a Norwegian footballer, born on July 21, 2000, in Leeds, England. Known for his incredible physicality, lightning-fast speed, and lethal goal-scoring instincts, Haaland has quickly established himself as one of the most prolific strikers in the world.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards v-bind:imgSrc="HaalandCard" v-bind:textOverlay="Haaland" playerName="Erling Haaland" />
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
