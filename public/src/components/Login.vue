<template>
    <div class="login thing">
      <form class="form-inline" @submit.prevent="login">
        <div class="form-group">
          <input type="text" class="form-control" v-model="user.email" placeholder="Email..." />
          <input type="text" class="form-control" v-model="user.password" placeholder="Password..." />
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
      or 
      <span class="btn btn-primary"> <router-link :to="{name: 'CreateUser'}">Sign Up</router-link></span>
    </div>
  </template>
  
  <script>
    import itunes from './Itunes'
    import mytunes from './MyTunes'
    export default {
      name: 'login',
      components: {
        mytunes,
        itunes
      },
      data() {
        return {
          user: {
              email: "",
              password: ""
          }
        }
      },
      methods: {
        login(){
          this.$store.dispatch('login', this.user)
        }
      }
    }
  
  </script>
  
  
  <style>
  
  </style>