export const state = () => ({
  list: []
})

export const mutations = {
  SET_IP (ip) {
    this.state.list = ip
  }
}

export const actions = {
  async getIP ({ commit }) {
    const ip = await this.$axios.$get('http://icanhazip.com')
    commit('SET_IP', ip)
  }
}
