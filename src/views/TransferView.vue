<template>
<div id="Transfers"> 
    <div class="wrap Transfers-content-top">
        <div class="transhead">
            <div class="lefthead">
                <span style="">中心钱包余额(元)</span>
                <h3 style="" data-bind="text:Balance">44.00元</h3>
            </div>
            <div class="righthead">
                <a href="/TransactionQuery" id="transactiondetails">交易明细</a>
            </div>
        </div>
        <div class="transferbody">
            <ul>
                <balance-stub v-for="platform in getPlatforms" 
                    :item="platform" 
                    :key="platform.name"
                    @showModal="showModal" >
                </balance-stub>
            </ul>
        </div>
    </div>
    <transfer-confirmation
        v-if="transfermode != ''"
        @closeModal="closeModal"
        :transfertype="transfermode"
        :platform="selectedplatform">
    </transfer-confirmation>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import BalanceStub from '../components/BalanceStub'
import TransferConfirmation from '../components/TransferConfirmation'

export default {
    name: 'transfer-platform',
    components: { BalanceStub, TransferConfirmation },
    data(){
        return {
            transfermode: '', //in, out, blank
            selectedplatform: ''
        }
    },
    methods: {
        ...mapMutations ([
            'setCurrentPage'
        ]),
        showModal: function (payload) {
            this.transfermode = payload.status;
            this.selectedplatform = payload.platform;
        },
        closeModal: function () {
            this.transfermode = '';
            this.selectedplatform = '';
        }
    },
    computed: {
      ...mapGetters ({
          getPlatforms: 'getBalancePlatforms'
      })
    },
    created() {
      this.setCurrentPage('Transfers');
  }
}


</script>

<style>

a {
    outline: 0;
    text-decoration: none;
}

body {
    background:#fff;
}

.header { 
    background:none;
}

.headphone{
    width: 8%;
    right: 15px;
    top: 34px;
}

.logo, #walletrecharge, #promotion, #VIP, #service, #bcard{
    display:none;
}

#transfers{
    display:block !important;
}

h1, h2, h3, h4, h5, h6, th, b {
    font-weight: normal;
}

.wrap.Transfers-content-top {
    margin-top: 1.0rem;
}


.transhead {
    background: url(/src/assets/trans/transfer-bg.jpg) no-repeat;
    background-size: 100%;
    height: 2rem;
}

.transhead .lefthead {
    float: left;
    margin-left: .4rem;
    margin-top: .38rem;
}

.transhead .lefthead span {
    color: #fff;
    font-size: .28rem;
    letter-spacing: .02rem;
}

.transhead .lefthead h3 {
    text-shadow: 1px 2px 3px #2d1205;
    color: #fff;
    font-size: .55rem;
    margin-top: .14rem;
}
.transhead .righthead {
    float: right;
    margin-right: .2rem;
}

.transhead .righthead a {
    font-size: .25rem;
    text-shadow: none;
    margin-top: 1rem;
    float: right;
    border: 1px solid #fff;
    border-radius: .28rem;
    padding: .08rem .28rem;
    letter-spacing: .03rem;
    color: #fff;
}


.transferbody ul {
    padding: 0 .15rem;
    overflow: hidden;
    list-style: none;
}


.transferbody ul li {
    margin-top: .2rem;
    width: 48.6%;
    margin-right: .15rem;
    float: left;
}

.transferbody .transtitle {
    font-size: .3rem;
    color: #232323;
    margin-bottom: .05rem;
    margin-left: .08rem;
}

.transferbody .transtitle span {
    border-left: 4px solid #188f63;
    font-size: .21rem;
    margin-right: .1rem;
}

.transferbody ul li:nth-child(2n+2) {
    margin-right: 0;
}

.transferbody ul li.PT .card {
    background: url(/src/assets/trans/trans-item1.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.MG .card {
    background: url(/src/assets/trans/trans-item4.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.SG .card {
    background: url(/src/assets/trans/trans-item8.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.TTG .card {
    background: url(/src/assets/trans/trans-item6.png) no-repeat;
    background-size: 100%;
}
.transferbody ul li.HABA .card {
    background: url(/src/assets/trans/trans-item9.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.PNG .card {
    background: url(/src/assets/trans/trans-item7.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li.BS .card {
    background: url(/src/assets/trans/trans-item10.png) no-repeat;
    background-size: 100%;
}

.transferbody ul li .card {
    background: #525252;
    width: 100%;
    height: 1.7rem;
    border-radius: .1rem;
    overflow: hidden;
    position: relative;
    color: #fff;
}
.transferbody ul li .card p {
    font-size: .21rem;
    margin-bottom: .05rem;
    padding-left: .2rem;
    padding-top: .2rem;
}

.transferbody ul li .card h2 {
    font-size: .4rem;
    padding-left: .2rem;
}

.transferbody ul li .card .cardlink {
    background: rgba(35, 35, 35, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    width: 100%;
    font-size: .25rem;
}

.transferbody ul li .card .cardlink a:nth-child(1) {
    border-right: 1px solid #fff;
}

.transferbody ul li .card .cardlink a {
    width: 48%;
    display: inline-block;
    text-align: center;
    padding: .09rem 0;
    color: #fff;
}

</style>
