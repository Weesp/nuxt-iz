export const state = () => ({
  errors: [],
  table: false,
  clientWidth: 0
})

export const getters = {
  errors (state) {
    return state.errors
  }
}

export const mutations = {
  PUSH_ERROR (state, value) {
    state.errors.push(value)
  },
  SET_CLIENT_WIDTH (state, value) {
    value <= 768 ? state.table = true : state.table = false
    state.clientWidth = value
  }
}

export const actions = {
  pushError ({ commit }, value) {
    commit('PUSH_ERROR', value)
  }
}
