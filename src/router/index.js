
import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView'
import WalletRechargeView from '../views/WalletRechargeView'
import TransferView from '../views/TransferView'
import PromotionView from '../views/PromotionView'
import VIPView from '../views/VIPView'
import SignInView from '../views/SignInView'


import LogInView from '../views/LogInView'
import RetrievePasswordView from '../views/RetrievePasswordView'
import GameListView from '../views/GameListView'

Vue.use(Router)

export default new Router({
routes: [
    {
        path: '/',
        component: HomeView  
    },
    {
        path: '/Homepage',
        component: HomeView     
    }, 
    {
        path: '/WalletRecharge',
        component: WalletRechargeView,
    },
    {
        path: '/Transfers',
        component: TransferView,
    },
    {
        path: '/Promotion',
        component: PromotionView,
    },
    {
        path: '/VIP',
        component: VIPView,
    },
    {
        path: '/Signin',
        component: SignInView,
    },
    {
        path: '/Login',
        component: LogInView,
    },
    {
        path: '/RetrievePassword',
        component: RetrievePasswordView,
    },
    {
        path: '/GameList',
        component: GameListView,
    }
]
})

