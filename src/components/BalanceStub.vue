<template>

   <li :class="item.customClass">
        <p class="transtitle"><span></span>{{ item.name }}</p>
        <div class="card">
            <p>平台余额：</p>
         <h2 data-bind="text:ptBalance">{{ item.balance }}元</h2>
            <div class="cardlink">
                <a @click="showModal( { status:  'in' , platform: item.name })" >转 入</a>
                <a @click="showModal( { status:  'out' , platform: item.name })" >转 出</a>
           </div>
        </div>
    </li>

    
</template>

<script>
export default {

  name: 'balanceStub',
  props: ['item'],
  methods: {
    showModal: function (payload){
        this.$emit('showModal', payload)
    }
  }
}
</script>


<style>

</style>