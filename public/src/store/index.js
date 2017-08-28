import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    user: {},
    myTunes: [],
    results: []
  },
  mutations: {
    addToMyTunes(state, arr){
      state.myTunes = arr
    },
    setResults(state, results) {
      state.results = results.results
      console.log(state.results)
    },
    createUser(state, user) {
      state.user = user
    },
    login(state, user) {
      state.user = user
    },
    logout(state, user) {
      state.user = user
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        commit('setResults', JSON.parse(data))
      })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
    },
    addToMyTunes({ commit, dispatch }, arr) {
      console.log(arr)
        $.ajax({
          contentType: 'application/json',
          method: 'PUT',
          url: '//localhost:3000/update',
          data: arr
        })
          .then(commit('addToMyTunes', arr))
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    },

    //User sign up, logout, and login functions
    createUser({ commit, dispatch }, user) {
      $.post("//localhost:3000/register", user)
        .then(res => {
          commit('createUser', res.data)
        })
    },
    login({ commit, dispatch }, user) {
      $.post("//localhost:3000/login", user)
        .then(res => {
          commit('login', res.data)
        })
    },
    logout({ commit, dispatch }) {
      var user = {}
      $.ajax({
        contentType: 'application/json',
        method: 'DELETE',
        url: '//localhost:3000/logout'
      })
        .then(commit('logout', user))

    }

  }
})

export default store
