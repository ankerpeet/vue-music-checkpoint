<template>
  <div class="container" id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }

</script>

<style>
  @import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
  .box {
    box-shadow: 1px 1px 5px 1px lightblue;
    margin: 25px auto 25px auto;
    padding: 25px;
    min-height: 200px;
    border-radius: 4px;
  }

  .albumArt {
    padding-top: 10px;
    max-width: 100px;
    max-height: 100px;
  }

  audio {
    background-color: white;
  }

  .btn a {
    color: white;
  }

  .btn a:hover {
    text-decoration: none;
    color: white;
  }

  a:focus {
    text-decoration: none;
  }

  .search {
    box-shadow: 1px 1px 5px 1px lightblue;
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 25px;
    border-radius: 4px;
  }
  .thing {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    justify-content: center;
  }
</style>