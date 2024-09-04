<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Mbappe = "Kylian Mbappé is a French footballer, born on December 20, 1998, in Bondy, France. Renowned for his blistering speed, exceptional technical skills, and remarkable goal-scoring ability, he has quickly risen to prominence as one of the best forwards in the world.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="/assets/PlayerCards/Mbappe.png" v-bind:textOverlay="Mbappe" playerName="Kylian Mbappe" />
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
