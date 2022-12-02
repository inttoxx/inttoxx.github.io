<script setup lang="ts">
</script>

<template>
    <div class="carousel-item active" data-bs-interval="30000">
        <div class="content w-100">
            <div class="project-description">
                <div class="project-title">
                    <h3>Free Ads</h3>
                    <p>Projet scolaire (1 semaine)</p>
                </div>
                <p>
                    Objectif : <br>
                    Développer une plateforme de vente b'objet d'occasion pour les particuliers
                </p>
                <p class="description-text">
                    Ce projet avait pour but de nous faire découvrir l'architachture MVC au travers du frameword laravel.
                    Nous avons également appris à utiliser larvalel sanctum pour l'authentification et eloquant pour l'ORM.
                    Nous devions aussis prévoir une partie réservée aux administrateurs avec des cruds pour chaques tables de la base de données. 
                    En bonus j'ai également implémenteé un filtre pour retrouver les produits plus facilement.
                </p>
                <div>
                    <div class="project-technologies">
                        <img src="/logos/laravel-logo.png" alt="laravel">
                        <img src="/logos/bootstrap-logo.png" alt="bootstrap">
                        <img src="/logos/mysql-logo.png" alt="mysql">
                    </div>
                </div>
                <a href="https://github.com/inttoxx/Projet-Laravel" class="project-github" target="_blank">
                    <img src="/logos/github-logo.png" alt="Free Ads">
                </a>
            </div>
            <div class="project-illustration">
                <img src="/free-ads/index-free-ads.png" alt="">
                <img src="/free-ads/crud-free-ads.png" alt="">
            </div>
        </div>
    </div>
</template>

<style>

    .content{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }
    .project-description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70%;
        width: 30%;
    }

    .project-technologies{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .project-technologies img{
        height: 50px;
    }

    .project-github{
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
    }

    .project-github img{
        height: 50px;
        width: 50px;
        cursor: pointer;
    }

    .description-text{
        text-align: justify;
    }

    .project-illustration{
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 400px;
        justify-content: space-between;
    }
    .project-illustration img{
        width: 100%;
        height: 49%;
    }

    .carousel-indicators{
        bottom: -40px;
    }

    .carousel-indicators [data-bs-target]{
        background-color: #E79C57;
    }

    .carousel-dark .carousel-indicators [data-bs-target]{
        background-color: #F47703;
    }

    @media screen and (max-width: 900px) {
        .content{
            flex-wrap: wrap;
        }
        .project-description{
            width: 500px;
        }
        .project-illustration{
            width: 500px;
            margin-top: 1em;
        }
    }
</style>