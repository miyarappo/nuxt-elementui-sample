<template>
  <el-container>
    <el-header>新規のシナリオ</el-header>
    <el-container>
      <el-aside width="400px">
        <el-container class="aside">
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
        </el-container>
      </el-aside>
      <el-main>
        <div v-if="creatingTask === ''">
          <h2 class="flow-title">フローに追加する行動を選択してください</h2>
          <div
            v-for="action in actions"
            :key="action.task"
            class="box-card"
            @click.prevent="selectAction(action.task)">
            <el-card>
              <h3>{{ action.title }}</h3>
              <p>{{ action.description }}</p>
            </el-card>
          </div>
        </div>
        <div v-if="creatingTask === '+gamil_get_1'">
          <h2 class="flow-title">メールを取得する</h2>
          <div>
            <span class="input-label">受信トレイ</span>
            <el-input
              v-model="input"
              placeholder="入力してください"
              class="input-size" />
            <el-button
              type="primary"
              plain
              class="button"
              @click="submitEmail">保存する</el-button>
            <el-button
              type="info"
              plain
              class="button">キャンセル</el-button>
          </div>
        </div>
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
      value: '',
      input: ''
    }
  },
  computed: {
    ...mapGetters({ creatingTask: 'scenario/getCreatingTask' }),
    ...mapGetters({ actions: 'flowAction/getShowingList' },)
  },
  methods: {
    changeValue(value) {
      this.$store.commit('flowAction/selectApplication', value)
    },
    selectAction(task) {
      this.$store.commit('scenario/setCreatingTask', task)
    },
    submitEmail() {
      this.$store.commit('scenario/setCreatingText', this.input)
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
  .aside {
    margin-top: 50px;
    justify-content: center;
  }
  .input-label {
    display: inline-block;
    margin-right: 30px;
  }
  .input-size {
    width: 400px;
  }
  .button {
    display: block;
    margin: 40px 20px 0px 300px;
  }
</style>
