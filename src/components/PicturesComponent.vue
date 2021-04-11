<template>
  <div class="">
    <h1>Pictures</h1>
    <div class="user-card-container" >
      <b-card-group v-for="(picture,index) in pictures" :key="index">
        <b-card :header="picture.name" class="text-center user-card" bg-variant="dark" text-variant="white">
          <router-link :to="{ name: 'PictureDetails', params: {id: picture.id, picture: picture} }">
          <b-card-text><button class="btn btn-light">Veure Imatge</button></b-card-text>
          </router-link>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script src='../scripts/PicturesComponent.js'></script>
<style>@import url('../styles/UsersComponent.css')</style> /* cambiar esto */
