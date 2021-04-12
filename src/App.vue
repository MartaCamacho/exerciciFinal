<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" align="center"  variant="info">
        <b-navbar-brand><router-link to="/">🖤</router-link></b-navbar-brand>
        
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/users">Users</router-link></b-nav-item>
            <b-nav-item><router-link to="/pictures">Pictures</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        
         <b-nav-form right>
          <b-form-input size="sm" class="mr-sm-2" value="search" placeholder="Nom d'usuari" v-model="SearchForm"></b-form-input>
          <b-button @click="redirectToFilter"  size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
    </div>
    <button class="mt-2 btn-dark" v-if="$route.path !== '/'" @click="back">Tornar</button>
    <transition
        name="fade"
        mode="out-in"
      >
      <router-view />
      </transition>
      <footer class="footer-container">
        <p>Made with 🖤 by Marta Camacho</p>
        <p>Copyright © 2021</p>
      </footer>
  </div>
</template>

<script src="./scripts/App.js"></script>

<style>
@import url('./styles/App.css');
</style>
