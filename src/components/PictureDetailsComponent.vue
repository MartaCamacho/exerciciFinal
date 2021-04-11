<template>
  <div class="mt-3">
    <h1>Detalls de l'imatge</h1>
    <div class="mt-5">
      <p>Nom: {{currentPicture.title}}</p>
      <img :src="currentPicture.thumbnailUrl" alt="picture"/>
    </div>
  </div>
</template>

<script src="../scripts/PictureDetailsComponent.js"></script>
