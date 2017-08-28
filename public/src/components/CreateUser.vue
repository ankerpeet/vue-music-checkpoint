<template>
    <div class="create-user">
      <form class="form-inline search" @submit.prevent="createUser">
        <div class="form-group">
          <input type="text" class="form-control" v-model="create.name" placeholder="Name..." />
          <input type="text" class="form-control" v-model="create.email" placeholder="Email..." />
          <input type="text" class="form-control" v-model="create.password" placeholder="Password..." />
          <button type="submit" class="btn btn-primary">Sign Up</button>
          <span class="btn btn-primary"> <router-link :to="{name: 'Home'}">Home</router-link></span>
        </div>
      </form>
    </div>
  </template>
  
  <script>
    export default {
      name: 'create-user',
      data() {
        return {
          create: {
              name: "",
              email: "",
              password: ""
          }
        }
      },
      methods: {
        createUser(){
          this.$store.dispatch('createUser', this.create)
        }
      }
    }
  
  </script>
  
  
  <style>
  
  </style>