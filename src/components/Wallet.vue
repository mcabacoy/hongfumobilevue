<template>
    <div class="wallet notice-bj">
     <div class="n-txt">
            <p class="coins-label" style=""><img v-bind:src="coinsicon"  class="coins" />中心钱包</p>
            <p class="balance-label" style="">余额：<span>{{ balance }}</span></p>
    </div>
    <div class="n-btn">
        <a ><img @click="routePage('/Wallet')" v-bind:src="walleticon" class="wallet-button" /></a>
        <a ><img @click="routePage('/Signin')" v-bind:src="signinicon" class="signin-button" /></a>
    </div>
    </div>
</template>
<script>
    import router from '../router/index'
    import { mapMutations } from 'vuex'
    export default {
      name: 'wallet',
      data(){
          return {
              balance: '￥44.00',
              coinsicon: '/src/assets/coins-ico.png',
              walleticon: '/src/assets/wallet_.png',
              signinicon: '/src/assets/signin.png'
          }
      },
      methods: {
          ...mapMutations ([ 
            'setCurrentPage'
          ]),
          routePage: function(pageName){
              this.setCurrentPage(pageName);
              router.push({ path: pageName });
          }
      }
    }
</script>

<style >

.notice-bj {
    background: url(/src/assets/index-bg.png) no-repeat;
    background-size:100% 100%;
    height: 1.28rem;
    line-height: .6rem;
    font-size: .24rem;
    color:#fff;
    z-index: 2;
    position: relative;
}
.notice-bj span{
    color: #fff;
    font-weight: 700;   
    font-size: .38rem;
    text-shadow: 1px 2px 1px #970032;
    margin-left: -.1rem;
}
.notice-bj .n-btn{
    position: absolute;
    right: .06rem;
    top: .37rem;
}
.notice-bj .n-txt{
    position:absolute;
    left:.2rem;
    top:.08rem;
}

.coins {
    width: .43rem; margin-right: .12rem; vertical-align: middle;
}
.coins-label {
    font-size: .29rem;color: #ffe57c;
}

.balance-label {
    font-size: .27rem;color: #ffe57c;margin-top: -.1rem;
}

.wallet-button {
    width: 1.8rem;
    margin-right: -.06rem;
}

.signin-button {
    width: 1.8rem;
}
</style>