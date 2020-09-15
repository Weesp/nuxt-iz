export const state = () => ({
  list: {}
})

export const getters = {
  pageParams: (state) => {
    return state.list
  }
}

export const mutations = {
  SET_IP (state, value) {
    state.list = value
  }
}

export const actions = {
}
