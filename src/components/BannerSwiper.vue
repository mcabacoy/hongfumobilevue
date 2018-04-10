<template>
     <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="banneritem in banners" v-bind:key="banneritem.filename">
                    <a>
                        <img v-bind:src="bannerFullPath(banneritem.filename)" />
                    </a>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-clickable"></div>
    </div> 
</template>


<script>

import Swiper from 'swiper'
export default {
  name: 'banner-swiper',
  data(){
     return {
         bannerPath: '/src/assets/banner/',
         banners: [
          {
            filename: 'banner_06.jpg'   ,
            url: ''
          },
          {
            filename: 'banner_03.jpg'   ,
            url: ''
          },
          {
            filename: 'banner_114.jpg'   ,
            url: ''
          },
          {
            filename: 'banner_01.jpg'   ,
            url: ''
          },
          {
            filename: 'banner_02.jpg'   ,
            url: ''
          },
          {
            filename: 'banner_04.jpg'   ,
            url: ''
          },
          {
            filename: 'banner_05.jpg'   ,
            url: ''
          }
      ]
     }
  },
  methods: {
      bannerFullPath: function (filename){
        return this.bannerPath + filename;
      }
  },
  mounted() {
       this.$nextTick(() => {
          var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el:  '.swiper-pagination',
                    clickable: true
                },
                 autoplay: {
                    delay: 3000,
                },
                // loop: true,
                // paginationClickable: true
            });
      });
  }
}
</script>


<style src='swiper/dist/css/swiper.min.css'></style>

<style>

/*引导页*/
.swiper-container {width: 100% !important;}
.swiper-slide {text-align: center;font-size: 18px;background: #fff;display: -webkit-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;-webkit-justify-content: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;-webkit-align-items: center;align-items: center;}
.swiper-slide a{width:100% !important;}
.swiper-slide img{width: 100% !important;}
.swiper-slide .img{width: 100% !important;
    height:100% !important; background-size:100% 100%;}

.detail-body .swiper-slide { 
    text-align: center;
    font-size: 18px;
    width: 67% !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-top: 12px;
    margin-right: 9px !important;
}

.swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #d6d6d6 !important;
}

.swiper-pagination {
    bottom: 0px !important;
} 

</style>