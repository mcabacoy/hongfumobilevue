
<template>
<div>
<transition name="transfer-trans">
<div class="TransferOutDiv">
    <div class="zcu">
        <div class="zru_top">
            <span class="TransferOutTitle">
                {{ modaltitle }}
            </span>
            <div class="dema_kong"  @click="closeModal">
                <span class="demoSpan2"></span>
            </div>
        </div>
        <div class="cz_nr_zhong">
            <span class="zzz">充值金额: </span>
            <span>￥</span>
            <input type="number" 
                placeholder="请输入金额" pattern="[0-9]*"
                min="0" inputmode="numeric" 
                maxlength="8" id="cz1" class="cz-input">
        </div>
        <div class="cz_zr_as">
            <a class="zcu_qurenzhuanr" href="javascript:void(0);" data-bind="click:TransferOut">确认转出</a>
        </div>
    </div>
    <div class="bg_cai"  @click="closeModal"></div>
</div>

</transition>

      </div>
</template>


<script>
export default {
  name: 'transfer-confirmation',
  props: ['transfertype', 'platform'],
  methods: {
    closeModal: function (payload){
        this.$emit('closeModal', payload)
    }
  },
  computed: {
      modaltitle: function(){
          let type = this.transfertype == 'in' ?
                     '转入' :  this.transfertype == 'out'? '转出' : '';
          let platformtype = 
            ( this.platform == '' || typeof this.platform == 'undefined' )
            ? '' :  this.platform;                    
          return type + platformtype;
      }
  }
}

</script>

<style>

.transfer-trans-enter-active  {
    transition:  opacity 5s ease-in-out;
    opacity: 0;
}
.transfer-trans-leave-active
{
    opacity: 1;
    transition:  opacity 3s  ease-in-out;
}
.transfer-trans-enter  {
    opacity: 1;
}

.transfer-trans-leave  {
    opacity: 0;
}


.TransferOutDiv, .TransferInDiv {
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 2001;
    width: 100%;
    height: 100%;
}

.TransferOutDiv .zcu, .TransferInDiv .zru {
    position: fixed;
    left: auto;
    margin-left: 0.55rem;
    margin-top: auto;
    top: 1rem;
}

.zcu {
    width: 5.3rem;
    height: 3rem;
    display: block;
    z-index: 2001;
    background-color: #f4f4f4;
    border-radius: 6px;
}

.zcu > .cz_nr_zhong span {
    font-size: .5rem;
    font-weight: 600;
    height: .73rem;
    display: block;
    float: left;
    color: #333333;
    font-size: .5rem;
}
.zzz {
    font-size: .25rem !important;
    font-weight: 400 !important;
    margin-top: 1%;
}

.cz-input {
    font-size: .33rem;
    width: 3.2rem;
    height: .6rem;
    line-height: .5rem;
    display: block;
    float: left;
    color: #333333;
    margin-top: 8.5%;
    -webkit-transform: none;
    -moz-transform: none;
    -o-transform: none;
}

.zcu > .cz_nr_zhong span {
    font-size: .5rem;
    font-weight: 600;
    height: .73rem;
    display: block;
    float: left;
    color: #333333;
    font-size: .5rem;
}

.zru_top {
    /* width: 5.3rem; */
    height: 1rem;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
    display: block;
    line-height: 1rem;
    padding-left: .23rem;
    font-size: .32rem;
    border-radius: 6px 6px 0 0;
    color: #c71324;
    text-align: center;
}

.TransferOutDiv .zcu > .cz_nr_shang, .TransferOutDiv .cz_nr_zhong {
    padding-left: 4%;
    width: 5.62rem;
    height: 1.5rem;
    line-height: 1.5rem;
    display: block;
    color: #000;
    font-size: .22rem;
    overflow: hidden;
}

.cz_zr_as {
    width: 5.3rem;
    display: block;
    margin-top: .1rem;
    font-size: .22rem;
    color: #525252;
    position: relative;
}

.dema_kong {
    width: .4rem;
    display: block;
    height: .4rem;
    position: relative;
    float: right;
    margin-top: .06rem;
     right: 0.3rem;
    top: 0.15rem;
}

.demoSpan2:before, .demoSpan2:after {
    content: '';
    height: .03rem;
    width: .4rem;
    display: block;
    background: #b5b5b5 !important;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    position: absolute;
    top: .15rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
}

.compbox .demoSpan2:before, .demoSpan2:after {
    background: #fff;
}

.demoSpan2:after {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
}


.zcu_qurenzhuanr {
    width: 100%;
    height: .8rem;
    line-height: .66rem;
    background-color: #c61324;
    display: block;
    color: #FFF;
    border-radius: 0 0 6px 6px;
    font-size: .28rem;
    text-align: center;
}

.bg_cai {
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(0, 0, 0, 0.54);
    position: fixed;
    top: 0;
    z-index: 2000;
}

</style>
