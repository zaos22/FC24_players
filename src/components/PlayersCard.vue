<template>
  <div class="content" v-if="isVisible">
    <div class="container px-4 mt-4 mb-4">
      <div class="row g-0 justify-content-center align-items-center">
        <div class="col-12 col-md-6 text-center text-white mb-3 mb-md-0">
          <div class="card text-white animate-enter">
            <div class="player-name">
              <h2>{{ playerName }}</h2>
            </div>
            <img :src="imgSrc" alt="Image" class="img-fluid" />
          </div>
        </div>
        <div class="col-12 col-md-6 box-align">
          <div class="box p-3 animate-enter">
            <p class="m-0">{{ textOverlay }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayersCard",
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    textOverlay: {
      type: String,
      required: true
    },
    playerName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: true
    };
  },
  mounted() {
  },
  beforeDestroy() {
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  height: 75vh;
}

.card {
  border: none;
  background-color: transparent;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

.player-name{
  background-color: rgba(92, 92, 92, 0.781);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 10px;
}

.box {
  background-color: rgba(92, 92, 92, 0.781);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  color: white;
  margin: 0 auto;
}

.box-align {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-enter {
  animation: slideInFromLeft 1s ease-in-out forwards;
}

@media only screen and (max-width: 853px) {
  .content {
    height: 50vh;
  }
}

@media only screen and (max-width: 767px) {
  .row {
    flex-direction: column;
  }

  .box-align {
    margin-top: 20px;
  }

  .content {
    height: 110vh;
  }
}
</style>
