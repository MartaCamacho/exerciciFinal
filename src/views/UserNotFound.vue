<template>
  <div>
    <div v-if="filteredUsers.length > 0">
       <UsersComponent :users="filteredUsers"/>
    </div>
    <h1 v-else class="mt-5 text-danger">User not found</h1>
  </div>
</template>

<script src='../scripts/UserNotFound.js'></script>