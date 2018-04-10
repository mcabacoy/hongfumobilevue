
<template>
  <div class="tabs-content" id="WalletRecharge">
      <div class="m-tabs active" id="tabs-BankCard">
            <div>

              
                <recharger-header
                     :recharger="methoddetails.recharger" > 
                </recharger-header> 
              
                       
                <div class="cz_nr">
                    <div class="cz_nr_shang">充值金额</div>
                    <label class="cz_nr_zhong">
                        <span>￥</span>
                        <input type="number"
                               step="0.01"
                               inputmode="numeric" 
                               min="0" 
                               class="cz-input"
                               autofocus="" 
                               :placeholder="methoddetails.recharger.placeholder">
                        </label>
                </div>

                <div class="cz_nr_xia cz_nr_xia-2">
                    <div></div>
                    <span class="arrowbox2"></span>
                    <select class="ss">
                      <option value="hfFirstDpBonus">首存优惠</option>
                      <option value="hfSecond25">再存25%</option>
                      <option value="no" selected="">下回再参与！</option>
                    </select>
                </div>
                <a class="cz_an" href="#">确 认</a>

                <p class="recharger-note">{{ methoddetails.recharger.aditionalremarks }}</p>
            </div>
        </div>
  </div>
</template>


<script>
import RechargerHeader from '../components/RechargerHeader'
import { mapState, mapGetters , mapMutations} from 'vuex'

export default {
  name: 'recharger-tab',
  components: { RechargerHeader },
  props: ["method"],
  methods: {
    
  },
  computed: {
      ...mapGetters ({
          methoddetails: 'getMethodDetails',
          defaultmethod : 'defaultmethod'
      }),
      ...mapState ({
          selected: state => state.wallet.selectedmethod
      })
  }

}

</script>


<style>

/* TABS */

.m-tabs {
    display: none;
}

.m-tabs.active {
    display: block !important;
}

.tabs-content {
    height:6.8rem;
}


#WalletRecharge .cz_nr_xia {
    background: #ffd800;
    color: #4c4c4c;
    border-radius: 3px 3px 0 0;
    font-size: .25rem;
    width: 6.2rem;
    height: .8rem;
    line-height: .8rem;
    margin: auto;
    margin-top: .22rem;
    padding-left: .28rem;
    border: 1px solid #bdbdbd !important;
}

#WalletRecharge .cz_nr_xia .exlcusive  {
  color: #ec3800;
  font-weight: 700;
}

#WalletRecharge .cz_nr_xia span {
    color: #ec3800;
    font-weight: 700;
}


#WalletRecharge .cz_nr {
    border-radius: 0 0 3px 3px;
    border: 1px solid #bdbdbd !important;
    border-top: none;
    margin-top: 0;
    height: 1.5rem;
    padding-top: .26rem;
    width: 6.2rem;
    margin: auto;
    display: block;
    background-color: #FFF;
    padding-left: .28rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position: relative;

    display: inline-table;
   
}

#WalletRecharge .cz_nr > .cz_nr_shang {
    position: relative;
    float: left;
    line-height: 1.01rem;
    font-size: .3rem;
    color: #232323;
}


.cz_nr > .cz_nr_shang, .cz_nr_zhong, .cz_nr_xia {
    height: .73rem;
    line-height: .73rem;
    display: block;
    font-size: .3rem;
    color: #000;
}


#WalletRecharge .zcu > .cz_nr_shang, 
#WalletRecharge .cz_nr_zhong {
    float: left;
    height: 1rem;
    width: auto;
    line-height: 1.02rem;
    color: #232323;
    font-size: .22rem;
    overflow: hidden;
    margin-left: 1%;
}


#WalletRecharge .cz_nr > .cz_nr_zhong span {
    font-size: .36rem;
    height: .73rem;
    display: block;
    float: left;
    color: #232323;
}

#WalletRecharge .cz-input {
    font-size: .33rem;
    width: 3.2rem;
    height: .6rem;
    line-height: .5rem;
    display: block;
    float: left;
    color: #333333;
    margin-top: 6%;
    padding-left: 5px;
}



.tabs-content .cz_nr_xia-2 {
    margin-top:0 !important;
    padding: 0 .6rem !important;
    text-align: center !important;
    position:relative !important;
}

.tabs-content  .cz_nr_xia-2  > div {
    background: #fff;
    width: 5rem;
    height: .6rem;
    position: absolute;
    margin-top: .1rem;
    border: 1px solid #bdbdbd;
    border-radius: .12rem;
}

#WalletRecharge .cz_nr_xia .arrowbox2 {
    padding: .21rem 6%;
    top: 50%;
    right: 1.0rem;
    z-index: 1;
}

#WalletRecharge .cz_nr_xia span {
    color: #ec3800;
    font-weight: 700;
}

.arrowbox2 {
    background: #ca0626;
    /* padding: .26rem .38rem !important; */
    position: absolute;
    /* top: 24% !important; */
    margin-top: -.2rem;
    /* right: .33rem !important; */
    border-radius: 3px;
}

.modal-bankcard .arrowbox2:before, #WalletRecharge .cz_nr_xia .arrowbox2:before, .prom1 .arrowbox2:before {
    content: '';
    height: .2rem;
    width: .2rem;
    display: block;
    border: 1px solid #fff;
    border-right-width: 0;
    border-top-width: 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    margin-top: -.16rem;
    right: 37%;
}

#WalletRecharge .cz_nr_xia .ss {
    height: .6rem;
    width: 5rem;
    padding-left: .25rem;
    /* z-index: 9999; */
    position: relative;
    float: left;
    margin-top: 0.1rem;
}

.cz_an {
   width: 5.6rem;
    height: .9rem;
    background-color: #c61324;
    color: #FFF;
    text-align: center;
    line-height: .9rem;
    display: block;
    font-size: .3rem;
    margin: .7rem auto 0;
    border-radius: .07rem;
}

.cz_an:visited {
    background-color: #0a72e7;
}

p.recharger-note {
  font-size: .23rem; 
  color: red; 
  text-indent: .4rem; 
  position: relative; 
  top: .2rem; 
}

</style>

