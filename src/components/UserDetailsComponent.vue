<template>
  <div class="mt-3">
    <h1>Detalls de l'usuari</h1>
    <div class="mt-5">
      <p>Nom: {{currentUser.name}}</p>
      <p>Usuari: {{currentUser.username}}</p>
      <p>Empresa: {{currentUser.company.name}}</p>
      <p>Web: {{currentUser.website}}</p>
      <p>Telèfon: {{currentUser.phone}}</p>
      <p>Email: {{currentUser.email}}</p>
    </div>
  </div>
</template>

<script src="../scripts/UserDetailsComponent.js"></script>
