
<template>
<div class="announcement">
    <div class="annlist">
        <span>
            <img src="/src/assets/speaker.png" />
            系统消息：
        </span>
        <div id="jcarousel">
            <ul id="notices" class="marquee">
                <li v-for="notice in notices" v-bind:key="notice">
                {{ notice }}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'announcement',
    data(){
      return {
          notices:[
              'This is just a random text',
              'Please disregard this'
          ]
      }
    }
}
</script>

<style>


/* .marquee {
    width: 450px;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    animation: marquee 50s linear infinite;
}
@keyframes marquee {
    0%   { text-indent: 27.5em }
    100% { text-indent: -105em }
} */
/* .announcement .annlist ul
{
    padding-left: 1.5em;
    position: relative;
} */
/* .marquee:hover {
    animation-play-state: paused
} */

.announcement{
    position: fixed;
    bottom: 0;
    background: #2b1913;
    background: -webkit-linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    background: -o-linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    background: -moz-linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    background: linear-gradient(to left, rgba(43, 25, 19, 0.43), #2b1913, #2b1913);
    padding: .15rem .2rem;
    width: 100%;
}
.announcement .annlist{
    font-size: .2rem;
    color: #ffcc00;
    letter-spacing: .02rem;
    height: .35rem;
    overflow: hidden;
}

.announcement .annlist span {
    color: #ff8400;
    float:left;
}
.announcement .annlist span img {
    vertical-align:middle;
    width: .38rem;
    margin-right: .1rem;
}
.announcement .annlist ul,
.announcement .annlist ul li{
    float:left;
}
.announcement .annlist ul li{
    transition: all 1.5s;
    padding: .04rem 0;
    line-height: .35rem;
    float:none;
}

.announcement #notices {
    width:70%;
    margin-right: .2rem;
    margin-top: -.05rem;
}

</style>

  