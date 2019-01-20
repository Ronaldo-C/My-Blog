<template>
  <div id="app">
    <div class="header">
      <span>W</span>
      <ul>
        <li>全部</li>
        <li>技术博客</li>
        <li>朝花夕拾</li>
        <li>关于我</li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    background-color: #F7F7F7;
    .header {
      height: 65px;
      width: 100%;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 110px;
      box-sizing: border-box;
      box-shadow: 0px 1px 5px #888888;
      span {
        font-size: 22px;
        font-style: italic;
      }
      ul {
        display: flex;
        color: #888888;
        li {
          margin: 0 20px;
          cursor: pointer;
          list-style: none;
        }
      }
    }
  }
</style>
