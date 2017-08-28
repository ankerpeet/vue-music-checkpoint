<template>
    <div class="mytunes">
        <div v-if="user.name === null" class="col-xs-12">
            <login></login>
        </div>
        <div class="col-xs-8 right" v-else>{{user.name.toUpperCase()}}
            <span class="btn btn-primary"> <router-link :to="{name: 'Home'}">Home</router-link></span>
            <button @click="logout" type="button" class="btn btn-primary">Logout</button>
        </div>

        <div v-for="artist in artists" class="col-xs-12 col-sm-6">
            <div class="box">
                <div class="row">
                    <div class="col-xs-3">
                        <img class="albumArt img-responsive" :src="artist.artworkUrl100" :alt="artist.collectionName">
                        <p class="text-center">{{artist.trackPrice}}</p>
                    </div>
                    <div class="col-xs-9">
                        <a href="javascript:void(0)" @click="playPause(1, 1)">
                            <h3>
                                <span class="glyphicon glyphicon-play"></span> {{artist.trackName}}
                            </h3>
                        </a>
                        <p>Album: {{artist.collectionName}}</p>
                        <p>By: {{artist.artistName}}</p>
                    </div>
                </div>
                <div v-if="user.name != null">
                    <span @click="addToMyTunes(artist)" class="glyphicon glyphicon-minus"></span>
                </div>
                <div>
                    <audio>
                        <source :src="artist.previewUrl" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import login from './Login'
    export default {
        name: 'mytunes',
        components: {
            login
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
            },
            artists(){
                return this.$store.state.myTunes
            }
        }
    }

</script>


<style>

</style>