<template>
  <div id="app" class="content">
    <head-top></head-top>
    <bottom-container></bottom-container>
  </div>
</template>

<script>
import HeadTop from './components/HeadTop'
import BottomContainer from './components/BottomContainer'

export default {
  name: 'app',
  components:{
    HeadTop,
    BottomContainer
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
.content{
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 60px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
