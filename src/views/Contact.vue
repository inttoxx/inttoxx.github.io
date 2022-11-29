<script lang="ts">
  import {RouterLink} from 'vue-router'

  export default ({
    data(){
      return{
        url: '',
        body: '',
        object: '',
      }
    },
    methods: {
      sendMail(){
        this.url =  encodeURI(`mailto:vavalor@gmail.com?subject=${this.object}&body=${this.body}`)
      }
    }
  })
</script>

<template>
  <div class="links">
    <RouterLink :to="{name: 'home'}" class="link presentation">PRESENTATION</RouterLink>
    <RouterLink :to="{name: 'projets'}" class="link projets">PROJETS</RouterLink>
    <RouterLink :to="{name: 'contact'}" class="link contact active">CONTACT</RouterLink>
  </div>
  <div class="view-container">
    <div class="contact-form">
      <div class="client-infos">
        <div>
          <label for="client-email">email :</label><br>
          <input type="email" id="client-email" autocomplete="false">
        </div>
        <div>
          <label for="objet">objet :</label><br>
          <input type="text" id="objet" autocomplete="false" v-model="object">
        </div>
      </div>
      <div class="body">
        <label for="body">votre message :</label>
        <textarea id="body" cols="30" rows="10" v-model="body"></textarea>
      </div>
      {{url}}
    </div>
    <div class="btn-container">
      <a :href="url" id='send-mail-btn' class="btn" @click="sendMail">ENVOYER</a>
    </div>
  </div>
</template>

<style scoped>
  a{
    color: #000000;
  }
  .contact-form{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height:80%;
  }

  .client-infos{
    display: flex;
    justify-content: space-between;
  }

  .client-infos div{
    width: 40%;
  }

  .client-infos input{
    width: 100%;
    height: 2em;
  }

  .body{
    display: flex;
    flex-direction: column;
  }

  .btn-container{
    position: absolute;
    bottom: 40px;
    right: 380px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .btn:hover{
    cursor: pointer;
    margin-bottom: 10px;
  }
</style>

