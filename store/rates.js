export const state = () => ({
  rates: {
    usd: {
      current: 0,
      old: 0
    },
    eur: {
      current: 0,
      old: 0
    }
  }
})

// export const getters = {
//   getRates: (state) => {
//     return state.rates
//   }
// }

export const mutations = {
  SET_RATES (state, value) {
    state.rates = value
  }
}

export const actions = {
  async getRates ({ commit }) {
    let rates
    try {
      rates = await this.$axios.$get('https://iz.ru/api/course/all.json')
      commit('SET_RATES', rates)
    } catch (error) {
      rates = {}
    }
  }
}
