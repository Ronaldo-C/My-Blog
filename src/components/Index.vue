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
    <div class="block">
      <el-pagination
        :page-size=3
        :pager-count=5
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      
    }
  },
  methods: {
    
  },
};
</script>


<style lang="scss" scoped>
.container {
  margin-top: 20px;
  .content {
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 10px 20px 20px 20px;
    padding: 20px;
    box-sizing: border-box;
    color: #3c3c3c;
    cursor: pointer;
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
  .block {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
}
</style>

