<script setup lang="ts">
</script>

<template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus in augue pharetra, 
    id lacinia risus scelerisque. Aliquam porttitor eros nec neque condimentum, ac imperdiet mi consectetur.
    Etiam vitae odi o non elit tempus rhoncus in in metus. Etiam rhoncus euismod velit, eget faucibus libero imperdiet
    sit amet. Mauris aliquet elementum erat, in lobortis ligula luctus eget. Sed tristique sem venenatis, ultricies sapien nec,
    rutrum nibh. Fusce id neque congue, tempus dui eget, aliquet nisl. Sed vitae volutpat diam.
  </p>
  <img src="/photo-presentation.jpg" alt="Photo de profil">
  <a href="https://www.linkedin.com/in/valentin-lorquin-70b95b106/" class="logo-resaux linkedin" target="_blank">
    <img src="/linkedin-logo.png" alt="linledin.com/in/valentin-lorquin">
  </a>
  <a href="https://github.com/inttoxx" class="logo-resaux github" target="_blank">
    <img src="/github-logo.png" alt="github.com/inttoxx">
  </a>
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
