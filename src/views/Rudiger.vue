<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Rudiger = "Antonio Rüdiger is a German footballer, born on March 3, 1993, in Berlin, Germany. Known for his commanding presence, strong defensive skills, and leadership qualities, Rüdiger has established himself as one of the top center-backs in European football. He began his professional career at VfB Stuttgart and gained further prominence with his performances at AS Roma in Serie A.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="../assets/PlayerCards/Rudiger.png" v-bind:textOverlay="Rudiger" playerName="Antonio Rüdiger" />
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
