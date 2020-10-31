<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  /* height: 100%; */
}
/* html {
  height: 100%;
}
#app {
  height: 100%;
} */

html,body{ width: 100%; height: 100%; overflow: scroll;}
html::-webkit-scrollbar, body::-webkit-scrollbar{width:0px;height:0px;}
body{margin:0;}
</style>
