<template>
<div class="promo-container">
<header class="header">
    <div class="cz_top">
        <a @click="setTab('promotions')" :class="getActiveCustomClass('promotions')" >
            自助优惠
            <span class="infoactive" v-if="opentab == 'promotions'">
                <img src="../assets/active-line.png" /></span>
        </a>
        <a  @click="setTab('information')" :class="getActiveCustomClass('information')">
            全部优惠
            <span class="bankactive"  v-if="opentab == 'information'">
                <img src="../assets/active-line.png" /></span>
        </a>
    </div>
</header>
<div class="wrapper content-wrapper" id="Promotion" style="margin-top: 2.2rem;">
    <div class="promotion" v-if="opentab == 'promotions'">
        <ul style="margin-bottom: 1rem;">
            <li class="promotion1">
                <div class="promotion_content">
                    <div class="leftside">
                        <h1>救援金22%</h1>
                        <p>存款≥100元 余额≤5元可使用 投注10-25倍</p>
                    </div>
                    <div class="rightside">
                        <p>高达5888元<br />老虎机/捕鱼</p>
                        <input type="submit" class="userimmd" value="立即使用" data-type="Rescue2to1" />
                    </div>
                </div>
            </li>
            <li class="promotion1">
                <div class="promotion_content">
                    <div class="leftside">
                        <h1>千倍百倍</h1>
                        <p>存款≥100元 余额≤5元可使用 投注10-25倍</p>
                    </div>
                    <div class="rightside">
                        <p>高达5888元<br />老虎机/捕鱼</p>
                        <input type="submit" class="userimmd" value="立即使用" data-type="Thousandfold" />
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class="systeminfo" v-else-if="opentab == 'information'">
        <ul class="slotMachine">
            <li class="Offer1  ">
                <div class="offer_content">
                    <a href="/OfferDetails?type=12">
                        <img src="/src/assets/promotions/New-Promo-1.png" style="width:100%;" />
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'promotion',
  data(){
      return {
          opentab: 'promotions'
      }
  },
  methods: {
      ...mapMutations ([
            'setCurrentPage'
        ]),
        setTab: function(payload){
           this.opentab =  payload;
        },
        getActiveCustomClass (payload) {
            return payload === this.opentab ? payload + " tab active" :  payload + "  tab";
        }
  },
    created() {
      this.setCurrentPage('Promotion');
  }
}
</script>

<style>
    
    .information.tab , .promotions.tab {
        width:50% !important;
    }

    .information.tab.active , .promotions.tab.active { 
        color:#ba0a1b;
    }

    .promo-container {
        margin-top: -0.2rem;
    }
   
    .promo-container .cz_top {
        position: fixed;
        height: .83rem;
        z-index: 5;
        top: 1.1rem;
        background-color: #ededed;
        border:0;}
    
    .promo-container .cz_top > a {
        color: #818181;
        font-size: .3rem;
        line-height: .76rem;
        float: left;
        text-align: center;
    }
    
    .logo, #transfers, #walletrecharge, #VIP, #service, #bcard {
        display:none;
    }
    
    header { 
        overflow: hidden;
        position: relative;
    }
    
    #Promotion {
        margin-top: 2rem !important;
    }

    .header {
        background: #1b7be9;
    }

   .promo-container  .cz_top {
        width: 100%;
    }

    .infoalert {
        background: #f62946;
        border-radius: 50%;
        width: .15rem;
        height: .15rem;
        position: absolute;
        margin-top: 2.8%;
        margin-left: .5%;
    }

    .infoactive img {
        width: 21%;
        position: absolute;
        bottom: -3px;
        left: 15%;
    }

    .bankactive img {
        width: 22%;
        position: absolute;
        bottom: -3px;
        right: 13.2%;
    }

    .promotion {
        margin-top: 2.2rem;
    }

    .promotion ul li:first-child {
        padding-top: 0;
    }

    .promotion ul li {
        margin-left: .3rem;
        background: #000;
        background: url(/src/assets/promotions/couponbg.png) no-repeat;
        background-size: 100%;
        width: 5.9rem;
        height: 1.9rem;
    }

    .promotion_content .leftside {
        float: left;
        width: 3.2rem;
        text-align: center;
        padding: .15rem 0 .15rem .3rem;
    }

    .promotion_content .leftside h1 {
        color: #fff;
        font-weight: 600;
        font-size: .48rem;
        text-shadow: 1px 2px 6px #9512c0;
    }


    .promotion_content .leftside p {
        font-size: .22rem;
        color: #ffc4ed;
        background: rgba(255, 255, 255, 0.2);
        padding: .04rem .1rem;
        margin-top: .07rem;
    }

    .promotion_content .rightside {
        float: right;
        width: 1.75rem;
        margin-right: .25rem;
        margin-top: .27rem;
    }

    .promotion_content .rightside p {
        color: #ffc4ed;
        padding-left: .1rem;
        font-size: .24rem;
    }

    .promotion_content .rightside .userimmd {
        background: #fff;
        background: -webkit-linear-gradient(#ffffff, #ffbcd1);
        background: -o-linear-gradient(#ffffff, #ffbcd1);
        background: -moz-linear-gradient(#ffffff, #ffbcd1);
        background: linear-gradient(#ffffff, #ffbcd1);
        box-shadow: 2px 3px 10px #c50861;
        color: #fb027c;
        font-weight: 600;
        font-size: .26rem;
        width: 1.5rem;
        height: .5rem;
        border-radius: .25rem;
        margin-top: .08rem;
    }

    input[type="submit"], input[type="button"], input[type="reset"] {
        cursor: pointer;
        border: none;
    }

    .systeminfo {
        display: block;
    }

    .systeminfo li {
        padding: .13rem .1rem 0 .1rem;
    }
    .offer_content img {
        box-shadow: 0px 2px 4px #888888;
        border-radius: 5px;
    }
    
</style>

