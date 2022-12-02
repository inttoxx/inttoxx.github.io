<script lang="ts">
    import FreeAds from '@/components/FreeAds.vue'
    import OnVaSeBouger from '@/components/OnVaSeBouger.vue';
    import Yowl from '@/components/Yowl.vue';
    import Aperta from '@/components/Aperta.vue';
    import GmHelper from '@/components/GmHelper.vue';
    import {RouterLink} from 'vue-router'

    export default {
        components: {
            FreeAds,
            OnVaSeBouger,
            Yowl,
            Aperta,
            GmHelper
        }
    }
</script>

<template>
    <div class="links">
        <RouterLink :to="{name: 'home'}" class="link presentation">PRESENTATION</RouterLink>
        <RouterLink :to="{name: 'projets'}" class="link projets active">PROJETS</RouterLink>
        <RouterLink :to="{name: 'contact'}" class="link contact">CONTACT</RouterLink>
    </div>
    <div class="view-container">
        <div  id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <FreeAds/>
                <Yowl />
                <OnVaSeBouger />    
                <Aperta />
                <GmHelper />
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<style>
   
</style>