<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'
import JudeCard from '../assets/PlayerCards/Bellingham.png'

const Bellingham = "Jude Bellingham is an English footballer, born on June 29, 2003, in Stourbridge, England. Known for his exceptional maturity, versatility, and all-around midfield ability, Bellingham has quickly risen to prominence as one of the brightest young talents in world football.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards v-bind:imgSrc="JudeCard" v-bind:textOverlay="Bellingham" playerName="Jude Bellingham" />
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
