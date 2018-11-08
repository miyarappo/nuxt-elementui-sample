<template>
  <el-container>
    <el-header>新規のシナリオ</el-header>
    <el-container>
      <el-aside width="400px">
        <div class="aside">
          <el-card
            v-for="(item, index) in list"
            :key="index"
            class="flow-item">{{ item.title }}
          </el-card>
          <el-select
            v-model="value"
            placeholder="サービスを選択"
            class="application-select"
            @change="changeValue(value)">
            <el-option
              v-for="(item, index) in serviceOptions"
              :key="index"
              :label="item.label"
              :value="item.value" />
          </el-select>
        </div>
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
        <GetGmail
          v-if="creatingTask === '+gamil_get_1'"
          :reset-select="resetSelect()" />
      </el-main>
    </el-container>
  </el-container> 
</template>

<script>
import { mapGetters } from 'vuex'
import GetGmail from '~/components/GetGmail.vue'

export default {
  components: {
    GetGmail
  },
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
    ...mapGetters({ creatingTask: 'scenario/getCreatingTask' }),
    ...mapGetters({ actions: 'flowAction/getShowingList' }),
    ...mapGetters({ list: 'scenario/getList' })
  },
  methods: {
    changeValue(value) {
      this.$store.commit('flowAction/selectApplication', value)
    },
    selectAction(task) {
      this.$store.commit('scenario/setCreatingTask', task)
      this.$store.commit('scenario/setCreatingTitle', 'メールを取得する')
    },
    resetSelect() {
      this.value = ''
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
  .flow-item {
    width: 80%;
    margin: 0 auto 20px;
  }
  .application-select {
    margin: 30px 0 0 100px;
  }
</style>
