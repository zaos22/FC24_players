<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Musiala = "Jamal Musiala is a German footballer, born on February 26, 2003, in Stuttgart, Germany. Known for his exceptional dribbling, vision, and composure on the ball, Musiala is considered one of the brightest young talents in European football. He began his youth career at Chelsea's academy before joining Bayern Munich in 2019.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="/assets/PlayerCards/Musiala.png" v-bind:textOverlay="Musiala" playerName="Jamal Musiala" />
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
