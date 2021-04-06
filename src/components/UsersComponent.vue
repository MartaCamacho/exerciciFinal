<template>
  <div class="">
    <h1>Users</h1>
    <div class="user-card-container" >
      <b-card-group v-for="(user,index) in users" :key="index">
        <b-card :header="user.name" class="text-center user-card" bg-variant="dark" text-variant="white">
          <router-link :to="{ name: 'UserDetails', params: {id: user.id, user: user} }">
          <b-card-text><button class="btn btn-light">Veure Usuari</button></b-card-text>
          </router-link>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script src='../scripts/UsersComponent.js'></script>
<style>@import url('../styles/UsersComponent.css')</style>
