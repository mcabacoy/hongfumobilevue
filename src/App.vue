<template>
  <div id="app">
    <navigation-bar @openSideBar="open"
         v-bind:currentPage="currentPage"
         v-if="currentPage!='LogIn'">
    </navigation-bar>
    
    <side-nav 
        @closeSideBar="close"
        v-bind:currentPage="currentPage"
        v-if="currentPage!='LogIn' && showSidebar">
    </side-nav>
    
    <menu v-if="currentPage!='LogIn'"></menu>

    <router-view></router-view>
  </div>
</template>

<script>

import NavigationBar from './components/NavigationBar'
import SideNav from './components/SideNav'
import Menu from './components/Menu'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data(){
      return {
          showSidebar: false,
      }
  },
  computed: {
      ...mapState ({
           currentPage: state => state.menus.currentPage 
      })
  },
  components: { NavigationBar, SideNav, Menu },
  methods: {
      open: function (){
          this.showSidebar = true;
    },
      close: function(pageName){
          this.showSidebar = false;
    }
  },
  created(){
    
    // from public.js
    var _self = this;
    _self.width = 640; //设置默认最大宽度
    _self.fontSize = 100; //默认字体大小
    _self.widthProportion = function () { var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width; return p < 0.5 ? 0.5 : p; };
    _self.changePage = function () {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
    }
    _self.changePage();
    window.addEventListener("resize", function () { _self.changePage(); }, false);
 }
}

</script>
<style>

input, button, select, textarea {
    font-family: Microsoft Yahei,SimSun,Arial;
    font-weight: inherit;
    background: transparent;
    border: none;
    -webkit-appearance: none;
    appearance: none;
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
}
/*reset*/
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td, button { margin:0; padding:0; border:0; outline:none; }
ul, ol {
        list-style: none;
    }
html,body{width: 100%; height: 100%;}
body{ font-family:Microsoft YaHei,Helvetica Neue, Helvetica, Arial, sans-serif;font-size: 14px;color:#333;margin: 0;padding: 0;background: #f5f5f9;}
* {-webkit-box-sizing: border-box;-ms-box-sizing: border-box;-o-box-sizing: border-box;box-sizing: border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);}
ul,ol{list-style:none;}
h1,h2,h3,h4,h5,h6,th,b{font-weight: normal;}
input,button,select,textarea{font-family: Microsoft Yahei,SimSun,Arial;font-weight:inherit; background: transparent;border: none;-webkit-appearance: none;appearance: none;}
input[type="submit"],input[type="button"],input[type="reset"]{cursor: pointer; border: none;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{-webkit-appearance: none !important;appearance:none!important;margin: 0; }

 img { -webkit-touch-callout: none; } 
 * {
-webkit-touch-callout:none;
}

em, i{font-style:normal;}
table { border-collapse:collapse; border-spacing:0; }
img{border:none;vertical-align:top;}
a{text-decoration:none;}
.clear { clear:both; }
.clearfix:after { content:"."; display:block; height:0; font-size:0; visibility:hidden; clear:both; }
.clearfix { zoom:1;}
.hidden {visibility:hidden;}
a { outline:0; 
    text-decoration:none; }
/*reset End*/

* {
    font-family: "Microsoft YaHei", "宋体",Arial, Helvetica, sans-serif !important;
}


section {
    width: 100%;
}

ul, ol {
    list-style: none;
}

:before, :after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

</style>