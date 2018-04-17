<template>
    <div>
        <div class="heiderDiv" v-if="currentPageName == 'GameList'">
            <span class="backBtn" style="position: relative;">
            <i></i>
         </span>

        <div class="nav-game" style="left: 2.25rem; top: 0;">
            <span class="allGame"><img src="/src/assets/HGame/PT-text.png"/></span>
        </div>
        <span class="menuBtn changeLog" style="position: relative;">
            <i class="menu-active"></i>
        </span>
        </div>
        
        <div class="nav" v-else>
        <a 
            href="#/Homepage"
            class="backer prompt"
            v-if="currentPageMenuType == 'back'"></a>
        <img :src="togglelogo" 
             class="nav-toggle" 
             @click="openSideBar" v-else    />
        
        <img :src="logo" class="logo"  v-if="currentPageName == '' || currentPageName == 'Homepage' || currentPageName == '鸿福首页' " />
        <span v-else >{{ currentPageName }}</span>
        </div>       
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





/* GAMELIST */

.heiderDiv{
    line-height: 34px;
    color: #FFF;
    font-size: .12rem;
	display: table;
	width: 100%;
	height: .55rem;
    position:relative;
    z-index:999;
    background: url(/src/assets/HGame/nav-bg.png) no-repeat;
    background-size: 100%;
    z-index: 2;
}
.heiderDiv span{
	display: table-cell;
	height:  .3rem;
	width: 8%;
}
.heiderDiv span img{
    width: 92%;
    margin-top: 12%;
}
.backBtn i{
	width: 100%;
    height: 1rem;
    display: list-item;
    background: url(/src/assets/HGame/back.png)no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    left: 0;
}


.menuBtn .menu, .menuBtn .menu-active{
	width: 100%;
    height: 1rem;
    display: block;
    background: url(/src/assets/HGame/menu.png)no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0;
    right: 0;
}
.menuBtn .menu-active{
     background: url(/src/assets/HGame/menu-active.png)no-repeat;
     background-size: 100%;
}
.nav-game{
    position: relative;
}
.nav-game span{
    position:absolute;
    width:14%;
}
.nav-game span img{
    width:100%;
    margin-top:.06rem;
}


@media screen and (orientation:landscape)
{
    .nav-game{left:1.4rem !important;}
    .nav-game span{width: 52%;}
}

@media screen and (orientation:portrait)
{
   .nav-game{left:.3rem !important;}
   .nav-game span{width: 100% !important;}
   .nav-game span img{margin-top: .12rem;}
   .backBtn i{width: 100%;background: url(/src/assets/HGame/back-portrait.png)no-repeat;background-size: 100%;}
   .menuBtn .menu-active{background: url(/src/assets/HGame/menu-activeportrait.png)no-repeat;background-size: 100%;width: 100%;}
   .heiderDiv{background: url(/src/assets/HGame/nav-bgportrait.png) no-repeat;background-size: 100%;height: 1rem;}
   .heiderDiv span{width: 15%;}

}

</style>