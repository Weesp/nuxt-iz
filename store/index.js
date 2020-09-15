export const state = () => ({
  list: []
})

export const getters = {
  data: (state) => {
    return state.list
  }
}

export const mutations = {
  SET_IP (ip) {
    console.log(this.state.list, ip)
    this.state.list = ip
  }
}

export const actions = {
  async getIP ({ commit }) {
    const ip = await this.$axios.$get('https://iz.ru/api/0/tag/rossiia')
    console.log(ip)
    commit('SET_IP', ip)
  }
}
