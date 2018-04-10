
import Vue from 'vue'
import  Vuex from 'vuex'

import menus from '../store/modules/sidemenus'
import wallet from '../store/modules/wallet'
import platform from '../store/modules/platforms'


Vue.use(Vuex)
export default new Vuex.Store({
modules:{
    menus,
    wallet,
    platform
    }
})