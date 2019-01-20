<template>
  <div>
    <div class="tips">
      <span>全部</span>
    </div>
    <div class="content">
      <div class="pic">
        <div class="title">改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气</div>
      </div>
      <div class="container">
        改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气
      </div>
    </div>
    <div class="content">
      <div class="pic">
        <div class="title">改革春风吹满地，中国人民真争气</div>
      </div>
      <div class="container">
        改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气
      </div>
    </div>
    <div class="content">
      <div class="pic">
        <div class="title">改革春风吹满地，中国人民真争气</div>
      </div>
      <div class="container">
        改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气改革春风吹满地，中国人民真争气
      </div>
    </div>
    <div class="pagine">
      <i class="el-icon-arrow-left" />
        1/6
      <i class="el-icon-arrow-right" />
    </div>
    <div class="goTop">
      <i class="el-icon-caret-top" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="scss" scoped>
  .content {
    width: 40%;
    background-color: #fff;
    height: 300px;
    margin: 20px auto;
    box-shadow: 0px 1px 16px #888888;
    cursor: pointer;
    .pic {
      width: 100%;
      height: 230px;
      background-color: blue;
      overflow: hidden;
      background-image: url('../assets/pic1.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      .title {
        width: 100%;
        height: 35px;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.4);
        bottom: 0;
        color: #fff;
        line-height: 35px;
        padding: 0px 20px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }
    }
    .container {
      overflow: hidden;
      height: 70px;
      box-sizing: border-box;
      padding: 10px 20px;
      font-size: 14px;
      background-color: #fff;
      border: 1px solid #ccc;
      color: #888;
      text-overflow: ellipsis;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      line-height: 26px;
    }
  }
  .pagine {
    margin: 20px auto 0;
    padding-bottom: 50px;
    width: 40%;
    text-align: center;
    font-size: 18px;
    color: #C5C1AA;
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
      color: #BDBDBD;
    }
  }
  .tips {
    float: left;
    font-size: 40px;
    margin-left: 23%;
    width: 30px;
    font-family: cursive;
    font-weight: bolder;
  }
</style>

