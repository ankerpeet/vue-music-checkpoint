<template>
  <div class="home">
    <div class="search row thing">
      <div class="col-xs-4">
        <form class="form-inline" @submit.prevent="getMusic">
          <div class="form-group">
            <input type="text" class="form-control" v-model="artist" placeholder="Artist Name..." />
            <button type="submit" class="btn btn-primary">Search Music</button>
          </div>
        </form>
      </div>


        <div class="col-xs-8 right" v-if="user.name != null">{{user.name.toUpperCase()}}
          <span class="btn btn-primary"> <router-link :to="{name: 'MyTunes'}">My Playlist</router-link></span>
          <button @click="logout" type="button" class="btn btn-primary">Logout</button>
        </div>
        <div v-else class="col-xs-8 right">
          <login></login>
        </div>


    </div>
    <!-- search results -->
    <itunes></itunes>
  </div>
</template>

<script>
  import itunes from './Itunes'
  import mytunes from './MyTunes'
  import login from './Login'
  import createuser from './CreateUser'
  export default {
    name: 'home',
    components: {
      mytunes,
      itunes,
      login,
      createuser
    },
    data() {
      return {
        artist: ''
      }
    },
    methods: {
      getMusic() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      },
      logout() {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }

</script>


<style>
</style>