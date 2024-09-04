<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Neymar = "Neymar Jr., born on February 5, 1992, in Mogi das Cruzes, Brazil, is a Brazilian footballer celebrated for his exceptional flair, creativity, and technical skill. Known for his dribbling ability, quick acceleration, and vision on the field, Neymar has become one of the most influential and marketable players in the world.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="src/assets/PlayerCards/Neymar.png" v-bind:textOverlay="Neymar" playerName="Neymar Jr." />
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
