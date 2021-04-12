<template>
  <div class="home d-flex justify-content-center">
    <section class="home-section">
      <h5>Users consulted</h5>
      <div>
        <p v-for="(user, index) in userCoincidenceName">
          <span class="d-flex justify-content-between mr-2 ml-2" :key="index"><span>{{user.name}}</span> <span>{{user.count}}</span></span>
        </p>
      </div>
      </section>
    <section class="home-section">
      <h5>Pictures consulted</h5> 
       <div>
        <p v-for="(picture, index) in pictureCoincidenceName">
          <span class="d-flex justify-content-between mr-2 ml-2" :key="index"><span>{{picture.name}}</span> <span>{{picture.count}}</span></span>
        </p>
      </div>
      </section>
  </div>
</template>

<script src='../scripts/Home.js'></script>
<style>
@import url('../styles/Home.css');
</style>
