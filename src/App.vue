<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="name">
      <h1>Valentin LORQUIN</h1><br>
      <h2>développeur web</h2>
    </div>
  </header>

  <main>
    <div class="links">
      <RouterLink :to="{name: 'home'}" class="link presentation active">PRESENTATION</RouterLink>
      <RouterLink :to="{name: 'projets'}" class="link projets">PROJETS</RouterLink>
      <RouterLink :to="{name: 'contact'}" class="link contact">CONTACT</RouterLink>
    </div>
    <div class="view-container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
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

.link.active{
  background-color: #ffffff;
  color: #000000;
  text-decoration: none;
}

a{
  text-decoration: none;
}

@media (min-width: 1024px) {
 
}
</style>
