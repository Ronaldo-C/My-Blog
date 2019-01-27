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
      <el-dropdown class="drop-down" trigger="click">
        <i class="iconfont icon-iconset0193 menu"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>全部</el-dropdown-item>
          <el-dropdown-item>技术博客</el-dropdown-item>
          <el-dropdown-item>朝花夕拾</el-dropdown-item>
          <el-dropdown-item>关于我</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
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
    @media screen and (min-width: 768px) {
      ul {
        display: flex;
        color: #888888;
        li {
          margin: 0 20px;
          cursor: pointer;
          list-style: none;
        }
      }
      .drop-down {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      ul {
        display: none;
      }
      .menu {
        font-size: 22px;
      }
    }
  }
}
</style>
