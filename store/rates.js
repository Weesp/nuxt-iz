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
  getRates ({ commit }) {
    return this.$axios
      .$get('https://iz.ru/api/course/all.json')
      .then((response) => {
        commit('SET_RATES', response)
      })
  }
}
