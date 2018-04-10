<template>
<div id="wallet-recharge">
    <div class="cz_top paymentmethod">
        <p>选择支付方式:</p>
        <ul>
            <li v-for="method in methods" :key="method.name">
                <span @click="updateRechargerTab(method.name)" :class="'menu-a n ' + ( activeMethod == method.name ? 'active' : '') ">
                    <img :src="method.logo" :class="method.customclass" /><span>{{ method.description }}</span>
                </span>
            </li>
        </ul>
    </div>
    <recharger-tab :method="activeMethod"></recharger-tab>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import router from '../router/index'
import RechargerTab from '../components/RechargerTab'

export default {
  name: 'wallet-recharge',
  props: ['methodname'],
  data() {
      return {
          selectedmethod: this.methodname
      }
  },
  components: { RechargerTab },
  computed: {
      ...mapState ({
        methods: state => state.wallet.paymentmethod,
        defaultmethod: state => state.wallet.defaultmethod
      }),
      activeMethod: function (){
          return  this.selectedmethod == '' || typeof this.selectedmethod == 'undefined'  ? this.defaultmethod :  this.selectedmethod;
      }
  },
  methods: {
    ...mapMutations ([
       'selectMethod',
       'setCurrentPage'
    ]),
    updateRechargerTab: function (method){
       this.selectMethod(method);
       this.selectedmethod = method;
    }
  },
  created() {
      this.setCurrentPage('WalletRecharge');
  }
}
</script>

<style>

body {
    background: #d6d7db;
}

input, button, select, textarea {
    font-family: Microsoft Yahei,SimSun,Arial;
    font-weight: inherit;
    background: transparent;
    border: none;
    -webkit-appearance: none;
    appearance: none;
}

label {
    display: inline-block;
    max-width: 100%;
    color: #3d4245;
    font-size: .25rem;
}

#wallet-recharge {
    margin-top: 1.1rem !important;
}

.cz_top {
    /* height: 4.5rem; */
    background-color: #fff;
    border-bottom: 1px solid #f3f3f3;
}

.paymentmethod {
    padding: 5px 17px;
}

.paymentmethod p:first-child {
    color: #818181;
    font-size: .26rem;
}

.paymentmethod ul {
    padding: .24rem 0;
    overflow: hidden;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
}

.paymentmethod ul li {
    float: left;
    text-align: center;
    width: 25%;
    padding-bottom: .65rem;
}

.paymentmethod ul li:last-child {
    padding-bottom: .2rem;
}

.paymentmethod ul li a {
    outline: 0;
    text-decoration: none;
}

.paymentmethod .n img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.4;
}

.paymentmethod img {
    width: 51%;
    display: block;
    margin: 0 auto;
    margin-bottom: .15rem;
}

.paymentmethod .active img {
    color: #000;
    opacity: 1 !important;
    -webkit-filter: grayscale(25%);
    filter: grayscale(25%) !important;
}

.paymentmethod .active span {
    color: #232323 !important;
    font-size: .22rem;
}

.paymentmethod  span {
    color: #a0a0a0;
    font-size: .23rem;
}


</style>
