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
  getCreatingTask: state => state.creatingOne.task,
  getList: state => state.list
}

export const mutations = {
  setCreatingTask(state, task) {
    state.creatingOne.task = task
  },
  setCreatingText(state, text) {
    state.creatingOne.text = text
  },
  setCreatingTitle(state, title) {
    state.creatingOne.title = title
  },
  addCreatingOne(state) {
    state.list.push(state.creatingOne)
    state.creatingOne = {
      title: '',
      task: '',
      action: '',
      url: '',
      text: ''
    }
  }
}