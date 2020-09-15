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
  async getIP ({ commit }) {
    // const ip = await this.$axios.$get('https://iz.ru/api/0/tag/rossiia')
    const ip = await this.$axios.$get('https://reqres.in/api/users?page=1')
    commit('SET_IP', ip)
  }
}
