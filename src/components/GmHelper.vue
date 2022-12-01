<script setup lang="ts">
</script>

<template>
    <div class="carousel-item" data-bs-interval="30000">
        <div class="content w-100">
            <div class="project-description">
                <div class="project-title">
                    <h3>Gm Helper (WIP)</h3>
                    <p>Projet personel</p>
                </div>
                <p class="description-text">
                    Etant maitre du jeu pour une campage sur le jeu "Chronique oubliée fantaisie"
                    j'ai eu l'idée de développer une plateforme afin d'aider les GM à gérer leurs partis.
                    le but de la plateforme sera de répétorier les diférentes tables des GMs, 
                    les personages des joeurs autour de la table (pv, invantaire, capacités, niveau), et de facilité la gestion des combats
                    avec la gestion de l'ordre de priorité des tours, les dégats infligés, la durée des bonus et malus et peut etre plus si affinités.
                </p>
                <div>
                    <div class="project-technologies">
                        <img src="/logos/nest-logo.png" alt="nest">
                        <img src="/logos/favicon.ico" alt="vue">
                        <img src="/logos/mongodb-logo.png" alt="mongoBB">
                    </div>
                </div>
                <a href="https://github.com/inttoxx" class="project-github" target="_blank">
                    <img src="/logos/github-logo.png" alt="GM Helper">
                </a>
            </div>
            <img class="logo-wip" src="/gmHelper/wip.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
    .logo-wip{
        height: 400px;
    }
</style>