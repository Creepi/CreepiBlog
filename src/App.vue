<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_1245845_sre0l51788l.css');
@font-face {
  font-family: 'halofont';
  src: url('./assets/fonts/halo.ttf') format('truetype');
}
html,#app,body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html::-webkit-scrollbar{
    display: none;
}
a{
text-decoration:none;
color:#333;
}
</style>
