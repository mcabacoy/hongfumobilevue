<template>
    <div class="platform-list index_content">
        <ul>
           <li :class="item.customClass" v-for="item in platforms" v-bind:key="item.name">            
                <span>{{item.name }}</span>
                <img src="" v-if="item.imagePath != ''">             
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'platform-list',
  computed: {
      ...mapState ({
          platforms: state => state.platform.platforms
      })
  }
}
</script>

<style>

.platform {
  padding-bottom: .6rem;
}

.index_content ul{
    padding: 0 .15rem;
    padding-bottom: .3rem;
    overflow:hidden;
}

.index_content ul li{
    background: #fff;
    box-shadow: 0px 3px 6px 0px rgba(3, 1, 12, 0.61);
    width: 48.6%;
    height: 1.65rem;
    border-radius: .1rem;
    float: left;
    overflow:hidden;
    margin-right: .15rem;
    margin-top: .2rem;
    position:relative;
}

.index_content ul li:nth-child(2n+2){
    margin-right:0;
}

.index_content ul li:nth-child(2n+1){
    margin-right: .15rem !important;
}

.index_content ul li span{
    background: rgba(174, 23, 76, 0.9);
    color: #fff;
    bottom: 0;
    position: absolute;
    width: 100%;
    padding: .05rem .2rem;
    font-size: .26rem;
}


.index_content.platform-list li
{
    background-size:100% !important;
    background-position-y: -.01rem !important;
    
}
.index_content li.PT1 {
    background: url(/src/assets/platforms/item1.png) no-repeat;
}

.index_content li.PNG{
    background: url(/src/assets/platforms/item5.png) no-repeat;
}
.index_content li.PT{
    background: url(/src/assets/platforms/item6.png) no-repeat;
}
.index_content li.SG{
    background: url(/src/assets/platforms/item7.png) no-repeat;
}
.index_content li.TTG{
    background: url(/src/assets/platforms/item8.png) no-repeat;
}
.index_content li.MG{
    background: url(/src/assets/platforms/item10.png) no-repeat;
}
.index_content li.BS{
    background: url(/src/assets/platforms/item9.png) no-repeat;
}
.index_content li.HABA{
    background: url(/src/assets/platforms/item11.png) no-repeat;
}

.PT1 img {
  position: absolute;
  top: 0;
  right: 0;
  width: .65rem;
}

.PT {
  margin-right:0;
 }

.PT img {
  position: absolute;
  top: 0;
  right: 0;
  width: .65rem;
}

.MG, .HABA , .TTG , .BS {
  margin-right:0; 
}

</style>
