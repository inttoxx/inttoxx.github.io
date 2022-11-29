<script setup lang="ts">
</script>

<template>
    <div class="carousel-item active" data-bs-interval="30000">
        <div class="content w-100">
            <div class="project-description">
                <div class="project-title">
                    <h3>Free Ads</h3>
                    <p>Projet scholaire</p>
                </div>
                <p class="description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus in augue pharetra, id lacinia risus scelerisque. Aliquam porttitor eros nec neque condimentum, ac imperdiet mi consectetur. Etiam vitae odio non elit tempus rhoncus in in metus. Etiam rhoncus euismod velit, eget faucibus libero imperdiet sit amet. Mauris aliquet elementum erat, in lobortis ligula luctus eget. Sed tristique sem venenatis, ultricies sapien nec, rutrum nibh. Fusce id neque congue, tempus dui eget, aliquet nisl. Sed vitae volutpat diam.
                </p>
                <div>
                    <div class="project-technologies">
                        <img src="/laravel-logo.png" alt="laravel">
                        <img src="/bootstrap-logo.png" alt="bootstrap">
                        <img src="/mongodb-logo.png" alt="mongoBB">
                    </div>
                </div>
                <a href="https://github.com/inttoxx/Projet-Laravel" class="project-github" target="_blank">
                    <img src="/github-logo.png" alt="Free Ads">
                </a>
            </div>
            <img class="project-illustration" src="/photo-presentation.jpg" alt="">
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
        width: 30%;
        height: 450px;
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
</style>