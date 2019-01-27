<template>
  <div class="container">
    <div class="content">
      <div class="topBox">
        <div class="title">改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气</div>
        <div class="fontIcon">
          <i class="el-icon-date"><span>2019-01-27</span></i>
          <i class="iconfont icon-yonghu"><span>Admin</span></i>
          <i class="iconfont icon-fenlei"><span>技术博客</span></i>
        </div>
      </div>
      <div
        class="bottomBox"
      >改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气</div>
    </div>
    <div class="content">
      <div class="pic">
        <div class="title">改革春风吹满地，中国人民真争气</div>
      </div>
      <div
        class="container"
      >改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气</div>
    </div>
    <div class="content">
      <div class="pic">
        <div class="title">改革春风吹满地，中国人民真争气</div>
      </div>
      <div
        class="container"
      >改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气</div>
    </div>
    <div class="pagine">
      <i class="el-icon-arrow-left"/>
      1/6
      <i class="el-icon-arrow-right"/>
    </div>
    <div class="goTop">
      <i class="el-icon-caret-top"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


<style lang="scss" scoped>
.container {
  margin-top: 20px;
  @media screen and (max-width: 900px) {
    .content {
      background-color: #fff;
      border: 1px solid #ccc;
      margin: 10px 20px 20px 20px;
      padding: 20px;
      box-sizing: border-box;
      color: #3c3c3c;
      .topBox {
        text-align: center;
        margin-bottom: 20px;
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 10px;
          font-size: 20px;
        }
        .fontIcon {
          font-size: 14px;
          line-height: 14px;
          display: flex;
          justify-content: space-around;
          span {
            padding-left: 6px;
          }
        }
      }
      .bottomBox {
        text-indent: 30px;
        font-size: 16px;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  .pagine {
    margin: 20px auto 0;
    padding-bottom: 50px;
    width: 40%;
    text-align: center;
    font-size: 18px;
    color: #c5c1aa;
    i {
      font-size: 18px;
      cursor: pointer;
    }
  }
  .goTop {
    position: fixed;
    bottom: 60px;
    right: 25%;
    i {
      font-size: 26px;
      color: #bdbdbd;
    }
  }
}
</style>

