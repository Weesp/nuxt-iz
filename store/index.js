export const state = () => ({
  errors: []
})

export const getters = {
  errors (state) {
    return state.errors
  }
}

export const mutations = {
  PUSH_ERROR (state, value) {
    state.errors.push(value)
  }
}

export const actions = {
  pushError ({ commit }, value) {
    commit('PUSH_ERROR', value)
  }
}
