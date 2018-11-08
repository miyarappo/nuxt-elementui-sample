<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    submitEmail() {
      this.$store.commit('scenario/setCreatingText', this.input)
      this.$store.commit('scenario/addCreatingOne')
      this.$store.commit('flowAction/resetShowingList')
      this.input = ''
      this.$emit('reset-select')
    }
  }
}
</script>

<style lang="scss" scoped>
  .input-size {
    width: 400px;
  }
  .button {
    display: block;
    margin: 40px 20px 0px 300px;
  }
</style>

