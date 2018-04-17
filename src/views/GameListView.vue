<template>
  <div class="bodyDiv gameTwo">
     <div class="">
       <game-list-swiper></game-list-swiper>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import GameListSwiper from '../components/GameListSwiper'
export default {
  name: 'game-list',
  components: { GameListSwiper },
  methods: {
    ...mapMutations ([
       'setCurrentPage'
    ])
  },
  created() {
      this.setCurrentPage('GameList');
  }
}
</script>


<style>

body {
	padding: 0;
	margin: 0;
  background: url(/src/assets/HGame/toobet-bgportrait.png)no-repeat;
  background-size: 100% 100%;
}

.bodyDiv {
	height:  3.6rem;
	overflow: hidden;
}

.bgDiv {
/*	height: 3.2rem;
	background-size: 100% 100%; */
    position:relative;
    z-index:1;
    margin-top: -2%;
    padding-top: 1.4%;
}




</style>
