<template>
 <div class="portrait swiper-container swiper-container-horizontal contentDiv all_img classification_img">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-active">
                    <ul class="portrait">
                        <li>
                            <div class="picture"></div>
                            <span>加油金块</span>
                        </li>
                         <li>
                            <div class="picture"></div>
                            <span>加油金块</span>
                        </li>
                         <li>
                            <div class="picture"></div>
                            <span>加油金块</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets">
            </div>
        </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'gameListSwiper',
    mounted() {
      this.$nextTick(() => {
          var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el:  '.swiper-pagination',
                    clickable: true
                },
                 autoplay: {
                    delay: 3000,
                }
            });
      });
    }
}
</script>

<style>
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    width: 350px;

    text-align: center;
    font-size: 18px;
    background: 000;
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
}


.swiper-slide ul {
    list-style: none;
    width: 99%;
    height: 100%;
    margin: 0 auto;
    margin-left: 0.10rem;
}

.swiper-slide li {
    width: 31.7%;
    height: .38rem;
    margin-right: .1rem;
    background: url(/src/assets/PT/button.png) no-repeat;
    background-size: 100%;
    float: left;
    border-radius: .05rem;
    display: block;
    color: #fff;
    font-size: .14rem;
    line-height: 32px;
    font-family: HiraginoSans !Important;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.45);
    margin-bottom: 1%;
}

.gameTwo .swiper-slide li {
    width: 23.4%;
    height: 1.24rem;
    margin-right: .1rem;
    margin-bottom: .1rem;
    float: left;
    display: block;
    text-align: center;
    color: #fff;
    font-size: .12rem;
    background: url(/src/assets/HGame/gamemenu-bg.png) no-repeat;
    background-size: 100%;
    font-family: HiraginoSans !important;
    letter-spacing: .02rem;
    line-height: .225rem;
    box-shadow: none;
    position: relative;
}

.gameTwo .swiper-slide li {
    text-align: center;
    color: #fff;
}

.gameTwo .swiper-slide li .picture {
    /* width: 93%; */
    /* height: .91rem; */
    border-radius: 2px;
    /* margin-left: 4%; */
    margin-top: .05rem;
    margin-bottom: .05rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

@media screen and (orientation: portrait) {
    .portrait {
        display: block !important;
    }

    .swiper-slide ul {
        margin-left: 0.23rem;
        padding-top: .3rem !important;
    }

    .gameTwo .swiper-slide li {
        width: 31%;
        height: 1.63rem;
        margin-bottom: .15rem;
        background: url(/src/assets//HGame/gamemenu-bgportrait.png) no-repeat;
        background-size: 100%;
        font-size: .15rem;
        line-height: .31rem;
        font-size: .15rem;
        line-height: .31rem;
    }

    .gameTwo .swiper-slide li .picture {
        height: 1.2rem;
        width: 92.8%;
        margin-left: 4%;
    }
}

</style>
