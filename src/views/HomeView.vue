<script setup lang="ts">
    import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="links">
    <RouterLink :to="{name: 'home'}" class="link presentation active">PRESENTATION</RouterLink>
    <RouterLink :to="{name: 'projets'}" class="link projets">PROJETS</RouterLink>
    <RouterLink :to="{name: 'contact'}" class="link contact">CONTACT</RouterLink>
  </div>
  <div class="view-container">
    <p>
      Apres un BTS et 5 ans d'experience dans l'hotellerie restauration, j'ai décidé de me réorienter dans le développement web après avoir validé mon projet par un bilan de compétences.
      J'ai commencé à me former sur openclassroom puis j'ai fait la "Coding Académy By Epitech", une formation de 5 mois pour 
      acquérire les bases du développement web, suivis d'un stage de 5 mois afin de mettre en pratique ce que j'ai appris dans le monde professionnel.
      Au cours de ma formation j'ai eu l'occasion de voir des framework tel que : Laravel, VueJs, React, NestJs. Mais j'ai aussis découvert les bases de données  tel que mysql ou mongodb.
      Je souhaiterais orienter ma carriere vers un poste de développeur backend dans un premier temps, puis full stack, si possible en Javascript.
      Je suis actuellement à la recherche de mon premier emploi, vous pourrez trouver mon cv <a href="/cv-VL.pdf">ici</a>.
    </p>
    <img src="/photo-presentation.jpg" alt="Photo de profil">
    <a href="https://www.linkedin.com/in/valentin-lorquin-70b95b106/" class="logo-resaux linkedin" target="_blank">
      <img src="/logos/linkedin-logo.png" alt="linledin.com/in/valentin-lorquin">
    </a>
    <a href="https://github.com/inttoxx" class="logo-resaux github" target="_blank">
      <img src="/logos/github-logo.png" alt="github.com/inttoxx">
    </a>
  </div>
</template>

<style scoped>
  p{
    width: 680px;
    text-align: justify;
  }

  img{
    width: 300px;
    height: 420px;
  }

  .logo-resaux{
    position: absolute;
    bottom: 40px;
  }

  .logo-resaux.linkedin{
    left: 350px
  }
  .logo-resaux.github{
    left: 550px
  }

  .logo-resaux img{
    width: 50px;
    height: 50px;
  }
</style>
