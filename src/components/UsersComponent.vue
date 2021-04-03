<template>
  <div class="">
    <h1>Users</h1>
    <div v-for="(user,index) in usersTotal" :key="index">
      {{user.name}}
    </div>
  </div>
</template>

<script src='../scripts/UsersComponent.js'></script>
