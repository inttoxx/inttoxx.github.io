<script setup lang="ts">
</script>

<template>
    <div class="carousel-item" data-bs-interval="30000">
        <div class="content w-100">
            <div class="project-description">
                <div class="project-title">
                    <h3>Yowl</h3>
                    <p>Projet scholaire (2 semaines)</p>
                </div>
                <p>
                    Objectif : <br>
                    développer une plateforme de partage de contenu numérique à la "twitter"
                </p>
                <p class="description-text">
                    Projet de fin de tronc commun de la coding académy by epitech.
                    Nous devions gérer l'authentification, la partie administrateur et devions imperativement 
                    développer une api pour dialoguer avec les backend.
                </p>
                <div>
                    <div class="project-technologies">
                        <img src="/logos/laravel-logo.png" alt="laravel">
                        <img src="/logos/favicon.ico" alt="bootstrap">
                        <img src="/logos/mysql-logo.png" alt="mongoBB">
                    </div>
                </div>
                <a href="https://github.com/inttoxx/Projet-Fin-Tronc-Commun" class="project-github" target="_blank">
                    <img src="/logos/github-logo.png" alt="Yowl">
                </a>
            </div>
            <img class="logo-yowl" src="/yowl/LogoYowl.png" alt="">
        </div>
    </div>
</template>

<style>
    .logo-yowl{
        height: 400px;
    }

    @media screen and (max-width: 900px){
        .logo-yowl{
            margin-top: 1em;
        }
    }
</style>