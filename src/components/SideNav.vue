<template>
    <div class="sidenav">
        <div class="sidemask" @click="closeSideBar"></div>
        <transition name="sidenav-trans">
        <div class="side-content" ref="sidecontent">
            <div class="firsttabb">
                <img class="grade" :src="getUserProfileSource(grade)" />
                <p id="AccountName">{{ "用户 " + accountName }}</p>
            </div>
            <div class="secondtabb">
                <ul>
                    <li v-for="menu in menus"
                        v-bind:key="menu.name" 
                        v-bind:class="menu.link == currentPage ? 'active' : ''" >    
                        <span @click="routePage(menu.link)" v-if="menu.linktype == 'internal'">
                            <span class="icon" :class="menu.class"></span>
                            <span>{{ menu.name }}</span>                        
                        </span>
                        <a :href="menu.link"  v-else>
                            <span class="icon" :class="menu.class"></span>
                            <span>{{ menu.name }}</span>                        
                        </a> 
                    </li>
                </ul>
            </div>
            <div class="thirdtabb logout">
                <a href=""><img src="/src/assets/nav-icons/logout-ico.png" style="width:12%;" /><span>退出登录</span></a>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>

import router from '../router/index'
import { mapState , mapMutations, mapGetters } from 'vuex'

export default {
  name: 'SideNav',
  data(){
      return {
        
        grade: 0,
        accountName: 'HFEason',
      }
  },
  mounted(){
      this.$nextTick(() => {
          setTimeout(()=>{
              this.$refs.sidecontent.className = this.$refs.sidecontent.className + ' visible';
          }, 50);
      });
  },
  
  methods: {
      ...mapMutations ([ 
       'setCurrentPage'
      ]),
      
      getUserProfileSource: function (grade){
          var rootSource = '/src/assets/Personalprofile/';
          switch(grade){
              case 0:
              return rootSource + 'futu-profile.png';
             case 8: 
             case 7: 
                return rootSource + '1.png';
             default:
                return  rootSource + grade + '.png';
          }
      },
      closeSideBar: function(){
          this.$refs.sidecontent.className = this.$refs.sidecontent.className.replace('visible', '');
          setTimeout(()=>{
              this.$emit('closeSideBar');
          }, 400);
      },
      routePage: function ( pageName ){
        this.setCurrentPage(pageName);
        router.push({ path: pageName });
        this.closeSideBar();
      },
  },
  computed: {
    ...mapState ({
        // menus: state => state.menus.pages,
        currentPage: state => state.menus.currentpage
    }),
    ...mapGetters ({
        menus: 'getSideMenus'
    })
  },
  created(){
        axios.get('http://http://mhf.toobet.co/Account',
            {headers: {
                 'Access-Control-Allow-Origin': '*',
            }})
        .then(response => {
            console.log(response.data);
            alert('hey!');
        })
        .catch( e=> {
            console.log(e);
            alert('hoy!');
        });
  }
}
</script>

<style>
/* TRANSITION CLASSES */
.sidenav-trans-enter-active  {
    margin-left: -6.5rem;;
    transition:  margin 3s linear;
}
.sidenav-trans-leave-active
{
       margin-left: 0rem;;
    transition:  margin 3s linear;
}
.sidenav-trans-enter  {
    margin-left: 0rem;
}

.sidenav-trans-leave  {
    margin-left: -6.5rem;
}

ul, ol {
    list-style: none;
}

a {
    text-decoration: none;
}

.sidemask {
    width: 1.9rem;
    height: 11rem;
    position: absolute;
    top: 0;
    right: 0;
}

.sidenav {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 200;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.sidenav .side-content {
  background: #1f2226;
    height: auto;
    width: 4.5rem;
    position: relative;
    margin-left: -6.5rem;
    transition: 0.8s;
}
.sidenav .side-content .firsttabb {
    background: url(/src/assets/nav-icons/nav-bg.png) no-repeat;
    background-size: cover;
    text-align: center;
    padding: .7rem 0 0 0;
    height: 3.45rem;
}

.sidenav .side-content.visible {
    margin-left: 0rem;
}

.sidenav .side-content .secondtabb ul li{
    padding: .2rem .5rem;
}
.sidenav .side-content .secondtabb ul li.active{
    background: #161c23;
}
.sidenav .side-content .secondtabb ul li a,
.sidenav .side-content .secondtabb ul li span {
    color: #d1d1d1;
}
.sidenav .side-content .secondtabb ul li.active span {
    color:#ffd200;
}
.sidenav .side-content .secondtabb ul li span {
    vertical-align: middle;
}

.sidenav .side-content .secondtabb ul li .icon{
    background: url(/src/assets/nav-icons/nav-icon1.png) no-repeat;
    background-size: 100%;
    width: .45rem;
    height: .45rem;
    display: inline-block;
    margin-right:.4rem
}
.sidenav .side-content .secondtabb ul li.active .icon{
    background: url(/src/assets/nav-icons/nav-icon1active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon2{
    background: url(/src/assets/nav-icons/nav-icon2.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon2{
    background: url(/src/assets/nav-icons/nav-icon2active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon3{
    background: url(/src/assets/nav-icons/nav-icon3.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon3{
    background: url(/src/assets/nav-icons/nav-icon3active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon4{
    background: url(/src/assets/nav-icons/nav-icon4.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon4{
    background: url(/src/assets/nav-icons/nav-icon4active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon5{
    background: url(/src/assets/nav-icons/nav-icon5.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon5{
    background: url(/src/assets/nav-icons/nav-icon5active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon6{
    background: url(/src/assets/nav-icons/nav-icon6.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon6{
    background: url(/src/assets/nav-icons/nav-icon6active.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li .icon7{
    background: url(/src/assets/nav-icons/nav-icon7.png) no-repeat;
    background-size: 100%;
}
.sidenav .side-content .secondtabb ul li.active .icon7{
    background: url(/src/assets/nav-icons/nav-icon7active.png) no-repeat;
    background-size: 100%;
}

.sidenav .side-content .secondtabb ul li.active a {
    color: #ffd200;
}
.sidenav .side-content .secondtabb ul li a {
    color: #d1d1d1;
}

.sidenav .side-content .thirdtabb{
    background: #24282e;
    padding: .27rem .5rem;
    margin-top: 1rem;
}
.sidenav .side-content .thirdtabb span{
    color: #5d6980;
    margin-left: .3rem;
    font-size: .25rem;
    line-height: 0.47rem;
}

.firsttabb p {
    color: #fff;
    font-size: .32rem;
    margin-top: .15rem;
}

.grade {
    width: 1.5rem;
    margin-bottom: -0.2rem;
}

.side-content {
    margin-left: 0px;
}


</style>

