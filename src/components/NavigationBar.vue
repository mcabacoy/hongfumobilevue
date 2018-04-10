<template>
    <div class="nav">
        <a @click="goBack"
            class="backer prompt"
            v-if="currentPageMenuType == 'back'"></a>
        <img :src="togglelogo" 
             class="nav-toggle" 
             @click="openSideBar" v-else    />
        

        <img :src="logo" class="logo"  v-if="currentPageName == '' || currentPageName == 'Homepage' || currentPageName == '鸿福首页' " />
        <span v-else >{{ currentPageName }}</span>
    </div>

    <!-- 
    <div class="nav2">
        <a href="/HomePage" class="backer prompt"></a>
        <span>签 到</span>
    </div> 
    -->
</template>

<script>

import router from '../router/index'
import { mapState , mapMutations, mapGetters } from 'vuex'

export default {
  name: 'NavigationBar',
  data(){
      return {
          logo: '/src/assets/logo.png',
          togglelogo: '/src/assets/toggle.png'
      }
  },
  methods:{
      openSideBar: function (){
         this.$emit('openSideBar');
      },
      goBack() {
        router.go(-1)
      }
  },
  computed: {
    ...mapState ({
        currentPage: state => state.menus.currentpage
    }),
    ...mapGetters ({
        currentPageName: 'getMenuByLink',
        currentPageMenuType: 'getMenuTypeLink'
    })
  }
}
</script>

<style>

.nav .backer:before {
    content: "";
    width: .24rem;
    height: .24rem;
    border-left: .03rem solid #ffc600;
    border-bottom: .03rem solid #ffc600;
    display: block;
    float: left;
    margin: .45rem -0.3rem 0 .4rem;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.nav .backer {
    color: #fff;
    font-size: .3rem;
    line-height: 1.35rem;
    position: absolute;
    width: 1.2rem;
    z-index: 5;
}

.prompt {
    text-align: center;
    color: #acacac;
}

.nav, .nav2{
    height: 1.1rem;
    background: #433635;
    background: -webkit-linear-gradient(#433635, #2b2622);
    background: -o-linear-gradient(#433635, #2b2622);
    background: -moz-linear-gradient(#433635, #2b2622);
    background: linear-gradient(#433635, #2b2622);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 150;
}

#Homepage{
        margin-top: 1.1rem;
}

.nav-fixed-top {
    position: fixed;
    top:0;
    z-index: 100;
}
.nav2 .backer {
    color: #fff;
    font-size: .3rem;
    line-height: 1.35rem;
    position: absolute;
    width: 1.2rem;
    z-index:5;
}
.nav2 .prompt span{
    margin-left:-.4rem;
}
.nav2 .backer:before {
    content: "";
    width: .24rem;
    height: .24rem;
    border-left: .03rem solid #ffc600;
    border-bottom: .03rem solid #ffc600;
    display: block;
    float: left;
    margin: .45rem -0.3rem 0 .4rem;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}


.nav span, .nav2 span {
    color: #ffcc00;
    font-size: .33rem;
    line-height: 1.15rem;
    width: 100%;
    text-align: center;
    display: block;
    position: absolute;
    top: 0;
}

.nav .nav-toggle {
    position:relative;
    z-index:5;
    width: .5rem; 
    margin-top: .35rem; 
    margin-left: .3rem;
}

.nav .logo {
    width: 1.6rem;
    margin-top: .15rem;
    margin-left: 1.6rem;
}

</style>