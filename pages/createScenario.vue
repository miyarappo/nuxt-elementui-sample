<template>
  <el-container>
    <el-header>新規のシナリオ</el-header>
    <el-container>
      <el-aside width="400px">
        <el-select
          v-model="value"
          placeholder="サービスを選択"
          @change="changeValue(value)">
          <el-option
            v-for="(item, index) in serviceOptions"
            :key="index"
            :label="item.label"
            :value="item.value" />
        </el-select>
      </el-aside>
      <el-main>フローに追加する行動を選択してください</el-main>
    </el-container>
  </el-container> 
</template>

<script>
export default {
  data() {
    return {
      serviceOptions: [{
          value: 'b_value',
          label: 'ブラウザ'
        }, {
          value: 'g_value',
          label: 'Gmail'
        }, {
          value: 's_value',
          label: 'スプレッドシート'
        }],
      value: ''
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    changeValue(value) {
      console.log(value)
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
