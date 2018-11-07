export const state = () => ({
  list: [],
  creatingOne: {
    title: '',
    task: '',
    action: '',
    url: '',
    text: ''
  }
})

export const getters = {
  getCreatingTask: state => state.creatingOne.task
}

export const mutations = {
  setCreatingTask(state, task) {
    state.creatingOne.task = task
  },
  setCreatingText(state, text) {
    state.creatingOne.text = text
  }
}