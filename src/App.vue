<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="name">
      <h1>Valentin LORQUIN</h1><br>
      <h2>développeur web</h2>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
header{
  height: 30vh;
}

main{
  width: 80%;
  margin: auto;
}

.name {
  text-align: center;
  position: absolute;
  top: 100px;
  right: 450px;
}

.view-container{
  background-color: #ffffff;
  border-radius: 0 10px 10px 10px;
  height: 55vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.links{
  display: flex;
  align-items: center;
}

.link{
  background-color: #F47703;
  padding: 1em;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}

.link:first-child{
  border-radius: 10px 0 0 0;
}
.link:last-child{
  border-radius: 0 10px 0 0;
}

a{
  text-decoration: none;
}
a:hover{
  color: #ffffff;
}

.link.active{
  background-color: #ffffff;
  color: #000000;
  text-decoration: none;
}
.link.active:hover{
  color: #000000;
}

@media screen and (max-width: 900px) {
  body{
    overflow-y: auto !important;
    height: fit-content;
  }
  
  header{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover{
    min-height: 100vh !important;
    height: fit-content !important;
  }
  
  .name{
    position: relative;
    top: 0;
    right: 0;
  }
  
  .view-container{
    flex-wrap: wrap;
    height: fit-content;
    padding: 1em;
    box-sizing: border-box;
    min-width: 350px;
  }
}
</style>
