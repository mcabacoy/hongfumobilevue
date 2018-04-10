
<template>
<div>
 <div class="cz_nr_xia exclusive" v-if="recharger.headertype=='exclusive'" >
    添加专属微信：<span id="WeChatNumber"></span>，
    <span>&nbsp;转账并备注账号!</span></div>

  <div class="cz_nr_xia" v-if="recharger.headertype =='limit'">
            {{ recharger.limit.label  }}：
            <span>{{ recharger.limit.from }}
            &nbsp;</span>  {{ recharger.limit.preposition }} <span>
            &nbsp;{{ recharger.limit.to }}{{ recharger.limit.currency }}</span></div>

</div>

</template>

<script>
export default {
    name: 'recharger-header',
    props: ['recharger']
}
</script>
