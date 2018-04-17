<template>
<section id="home-view">
    <!-- Floater  -->
    <floater imgsrc="/src/assets/box.png"></floater>
    <!--  Swiper  -->
    <banner-swiper></banner-swiper>
    <!-- Wallet -->
    <wallet></wallet>
    <!-- Content -->
    <platform-list></platform-list>
    <!-- Announcement -->
    <announcement></announcement>
</section>
</template>

<script>
import Wallet from '../components/Wallet'
import BannerSwiper from '../components/BannerSwiper'
import PlatformList from '../components/PlatformList'
import Announcement from '../components/Announcement'
import Floater from '../components/Floater'
import { mapState, mapMutations } from 'vuex'

import axios from 'axios';

export default {
    name: 'home-view',
    components: { 
        Wallet, 
        BannerSwiper , 
        PlatformList, 
        Announcement, 
        Floater 
      },
    methods: {
        ...mapMutations ([
       'selectMethod',
       'setCurrentPage'
     ])
    },
    created(){
        this.setCurrentPage('Homepage');
    }
}

</script>

<style>

#home-view {
  margin-top: 1.1rem;
}

.bigbox { width:100%;height:100%;background: rgba(32,35,52, .62);margin:0;position: fixed;top: 0;left:0;display:none;z-index: 12999;}
.bigboxShow { width:100%;height:100%;background: rgba(32,35,52, .62);margin:0;position: fixed;top: 0;left:0;display:block;z-index: 12999;}
.loading { width: .6rem }
.warp {  margin: auto;  position: absolute;  top: 41%;  left: 0;  bottom: 0;  right: 0;  width: 2rem;  text-align: center;  }



</style>
