<template>
    <div class="cbox">
        <img :src="imgsrc">
    </div>
</template>

<script>
export default {
  name: 'floater',
  props: ['imgsrc']
}
</script>


<style>

.cbox {
  position: relative;
  animation: MoveUpDown2 5s linear infinite;
}

.beat {
    animation: beat .8s linear 1;
    margin: 0 auto;
    display: block;
}

.cbox img {
   animation: beat 5.8s linear infinite ;
   margin: 0 auto;
   display: block;
}

@keyframes beat {
  0%, 86.20% {
    position: absolute; 
    z-index: 99; 
    right: .2rem; 
    width: 16%; 
    top: .3rem;  
  }
  86.21% {
    width:19%;
  }
  93.10% {
    width: 16%;
  }
  96.55% {
    width:20%;
  }
  100% {
    width: 16%;
  }
}

.moveup2 {
    position: relative;
    animation: MoveUpDown2 5s linear infinite;
}

@keyframes MoveUpDown2 {
  0% {
    top: .5rem;
  }
  50% {
    top: 0;
  }
  100% {
    top: .5rem;
  }
}

.cbox img {
    position: absolute; 
    z-index: 99; 
    right: .2rem; 
    width: 16%; 
    top: .3rem;
}
</style>