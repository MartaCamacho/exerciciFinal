<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand><router-link to="/">🖤</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/users">Users</router-link></b-nav-item>
            <b-nav-item><router-link to="/pictures">Pictures</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
      <footer class="footer-container">
        <p>Made with 🖤 by Marta Camacho</p>
        <p>Copyright © 2021</p>
      </footer>
  </div>
</template>

<style>
@import url('./styles/App.css');
</style>
