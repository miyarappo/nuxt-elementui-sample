<template>
  <el-container>
    <el-header>
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="goCreateScenario">シナリオを作成
      </el-button>
    </el-header>
    <el-main>
      <el-card
        v-for="(template, index) in templates"
        :key="index"
        class="box-card">
        <div>{{ template }}</div>
      </el-card>
    </el-main>
  </el-container> 
</template>

<script>
export default {
  data() {
    return {
      templates: [
        "人事労務系のテンプレート",
        "顧客管理系のテンプレート",
        "営業支援系のテンプレート",
        "WEBサイト分析系のテンプレート"
      ]
    }
  },
  methods: {
    goCreateScenario() {
      this.$router.push({ path: 'createScenario' })
    }
  }
}
</script>

<style>
  .el-container {
    color: #333;
  }
  .el-header {
    background-color: #B3C0D1;
    height: 60px;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #F2F2F2;
    height: calc(100vh - 60px);
  }
  .box-card {
    width: 228px;
    display: inline-block;
    margin: 10px 20px 10px 0;
  }
</style>
