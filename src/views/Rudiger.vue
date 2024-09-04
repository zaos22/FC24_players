<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'
import RudigerCard from '../assets/PlayerCards/Rudiger.png'

const Rudiger = "Antonio Rüdiger is a German footballer, born on March 3, 1993, in Berlin, Germany. Known for his commanding presence, strong defensive skills, and leadership qualities, Rüdiger has established himself as one of the top center-backs in European football.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards v-bind:imgSrc="RudigerCard" v-bind:textOverlay="Rudiger" playerName="Antonio Rüdiger" />
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
