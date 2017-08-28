<template>
    <div class="itunes">
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
                    <span @click="addToMyTunes(artist)" class="glyphicon glyphicon-plus"></span>
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
    export default {
        name: 'itunes',
        data() {
            return {
                playList: []
            }
        },
        methods: {
            addToMyTunes(track){
                var arr = this.playList.push(track)
                this.$store.dispatch('addToMyTunes', arr)
            }
        },
        computed: {
            artists() {
                return this.$store.state.results
            },
            user() {
                return this.$store.state.user
            },
            checkPlaylist(){
                this.playList = this.$store.state.myTunes
            }
        }
    }

</script>


<style>

</style>