<template>
 <div id="login">
    <div class="logoDiv"></div>
    <section class="loginDiv">
        <div class="userNameBox">
            <span>账号</span>
            <input type="text" id="userName" v-model="userName" />
        </div>
        <div class="passWordBox">
            <span>密码</span>
            <input type="password" id="passWord" v-model="passWord"/>
        </div>
        <div class="loginBtn" @click="login">登 录</div>
        <div class="operationDiv">
            <p class="forgetPW" @click="routePage('RetrievePassword')" ></p>
            <p class="registerID"></p>
        </div>
    </section>
<!--  -->
    <notification :message="notifmessage" @close="closeNotif"  v-if="notifmessage!=''"/>
</div>
</template>

<script>

import Notification from '../components/Notification'
import router from '../router/index'
import axios from 'Axios'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'login',
  components: { Notification },
  data(){
      return {
          userName: '',
          passWord: '',
          notifmessage: ''
      }
  },
  computed: {
      ...mapState ({
           currentPage: state => state.menus.currentPage 
      })
  },
  methods: {
    ...mapMutations ([
            'setCurrentPage'
    ]),
    login(){
        axios.get('http://localhost:37852/api/contact/get')
        .then(response => {
            this.notifmessage = response.data;
            console.log(response.data);
        })
        .catch( e=> {
            this.notifmessage = 'fail'; //'用户名不能为空';
            console.log(e);
        });
       
          
    },
    closeNotif(){
        this.notifmessage = ''
    },
    routePage: function ( pageName ){
        router.push({ path: pageName });
      },
  },
  created() {
      this.setCurrentPage('LogIn');
    }
}
</script>

<style>

body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;

        position: relative;
        overflow: hidden;
        height: 100%;
        background: #56001c;
        background: -webkit-linear-gradient(0deg, #56001c, #d2341a);
        background: -o-linear-gradient(0deg, #56001c, #d2341a);
        background: -moz-linear-gradient(0deg, #56001c, #d2341a);
        background: linear-gradient(0deg, #56001c, #d2341a);
}

.nav {
        display:none;
}
    .logoDiv {
        width: 3.2rem;
        height: 1.8rem;
        margin: 0 auto;
        background-image: url(/src/assets/Login/login-logo.png);
        background-size: 100%;
        margin-top: 0.8rem;
        margin-bottom: 0.7rem;
        background-repeat: no-repeat;
    }

    .loginDiv {
        width: 4.7rem;
        height: 3.4rem;
        margin: 0 auto;
    }

    .userNameBox, .passWordBox {
        height: 0.8rem !important;
        width: 4.7rem !important;
        border-radius: .1rem;
        background: rgba(36, 6, 6, 0.3);
        margin-bottom: 0.25rem;
        position:relative;
    }

    .loginDiv span {
        width: 1.1rem;
        display: block;
        color: #ffc000;
        text-align: center;
        padding-top: .19rem;
        font-size: .3rem;
        letter-spacing: .01rem;
    }

    .loginDiv input {
        width:72%;
        height: 0.53rem;
        position: relative;
        left: 1.1rem;
        top: -0.48rem;
        border: none;
        font-size: 0.3rem;
        outline: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        background-color: transparent;
        border:1px solid transparent;
        border-left: 1px solid #ffc000;
        border-radius:0;
        padding-left: .3rem;
        color: #fff;
    }
    .loginDiv #userName{
        background: url(/src/assets/hf.png) no-repeat top left;
        background-size: 24%;
        background-position-x: .2rem;
        background-position-y: .06rem;
        padding-left: 1.08rem;
    }

    .loginBtn {
        background: #ef8d00;
        background: -webkit-linear-gradient(0deg, #ef8d00, #ffae00);
        background: -o-linear-gradient(0deg, #ef8d00, #ffae00);
        background: -moz-linear-gradient(0deg, #ef8d00, #ffae00);
        background: linear-gradient(0deg, #ef8d00, #ffae00);
        width: 4.7rem;
        height: 0.9rem;
        color: #fff;
        font-size: 0.35rem;
        text-align: center;
        line-height: 0.9rem;
        border-radius: .1rem;

        letter-spacing: -0.55rem;
        padding-left: 0.2rem !important;
    }

    .operationDiv {
        display: table;
        height: 0.45rem;
        width: 2.8rem;
        margin: 0 auto;
        margin-top: .25rem;
    }

        .operationDiv p {
            display: table-cell;
        }

        .operationDiv .forgetPW {
            background-image: url(/src/assets/Login/forgetPassword.png);
            background-size: 81%;
            background-repeat: no-repeat;
        }

        .operationDiv .registerID {
            background-image: url(/src/assets/Login/signUpNow.png);
            background-size: 81%;
            background-repeat: no-repeat;
            background-position-x: 100%;
        }
</style>
