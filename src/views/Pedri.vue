<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Pedri = "Pedri González, commonly known as Pedri, is a Spanish footballer born on November 25, 2002, in Tegueste, Tenerife. Renowned for his exceptional vision, precise passing, and footballing intelligence, Pedri is considered one of the most promising young midfielders in the world. He began his professional career at Las Palmas before joining FC Barcelona in 2020.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="/assets/PlayerCards/Pedri.png" v-bind:textOverlay="Pedri" playerName="Pedri González" />
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
