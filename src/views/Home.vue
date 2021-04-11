<template>
  <div class="home d-flex justify-content-center">
    <section class="home-section">
      <h5>Users consulted</h5>
      <div>
        <p v-for="(user, index) in userCoincidenceName">
          {{user.name}} {{user.count}}
        </p>
      </div>
      </section>
    <section class="home-section">
      <h5>Pictures consulted</h5> 
       <div>
        <p v-for="(picture, index) in pictureCoincidenceName">
          {{picture.name}} {{picture.count}}
        </p>
      </div>
      </section>
  </div>
</template>

<script src='../scripts/Home.js'></script>
<style>
@import url('../styles/Home.css');
</style>
