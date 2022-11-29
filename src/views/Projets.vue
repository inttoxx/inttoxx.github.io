<script lang="ts">
    import ProjetLaravel from '@/components/ProjetLaravel.vue';
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="links">
        <RouterLink :to="{name: 'home'}" class="link presentation">PRESENTATION</RouterLink>
        <RouterLink :to="{name: 'projets'}" class="link projets active">PROJETS</RouterLink>
        <RouterLink :to="{name: 'contact'}" class="link contact">CONTACT</RouterLink>
      </div>
      <div class="view-container">
        <div class="caroussel"></div>
        <ProjetLaravel />
      </div>
</template>

<style>
    .navigator{
        position: absolute;
        top:center;
    }

    .navigator.left{
        left: 50px;
    }

    .navigator.right{
        right: 50px;
    }

    .pagination{
        position: absolute;
        bottom: 20px;
        display: flex;
    }

</style>