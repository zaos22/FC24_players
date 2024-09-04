<script setup>
import PlayersCards from '../components/PlayersCard.vue'
import Cards from '../components/Card.vue'

const Mbappe = "Kylian Mbappé es un futbolista francés, nacido el 20 de diciembre de 1998 en Bondy, Francia. Es conocido por su velocidad, habilidades técnicas y capacidad goleadora, lo que lo convierte en uno de los mejores delanteros del mundo.";
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="">
        <PlayersCards imgSrc="src/assets/PlayerCards/Mbappe.png" v-bind:textOverlay="Mbappe" playerName="Kylian Mbappe" />
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
