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
      <el-main>
        <h2 class="flow-title">フローに追加する行動を選択してください</h2>
        <el-card
          v-for="(action, key) in actions"
          :key="key"
          class="box-card">
          <h3>{{ action.title }}</h3>
          <p>{{ action.description }}</p>
        </el-card>
      </el-main>
    </el-container>
  </el-container> 
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      serviceOptions: [
        {
          value: 'browser',
          label: 'ブラウザ'
        }, 
        {
          value: 'gmail',
          label: 'Gmail'
        }, 
        {
          value: 'spreadsheet',
          label: 'スプレッドシート'
        }
      ],
      value: ''
    }
  },
  computed: {
    ...mapGetters({actions: 'flowAction/getShowingList'})
  },
  methods: {
    changeValue(value) {
      console.log(value)
      this.$store.commit('flowAction/selectApplication', value)
    }
  }
}
</script>

<style lang="scss" scoped>
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
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
  .flow-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

</style>
