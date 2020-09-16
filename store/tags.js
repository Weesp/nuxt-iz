/* eslint-disable no-console */
// import menuDefault from '@/assets/params/ConfigDefault/MainMenu'

export const state = () => ({
  all: [],
  topPanel: [],
  mainMenu: [],
  ticker: []
})

// export const getters = {
//   getTopPanel: (state) => {
//     return state.topPanel
//   },
//   getMainMenu: (state) => {
//     return state.mainMenu
//   },
//   getTicker: (state) => {
//     return state.ticker
//   }
// }

export const mutations = {
  SET_TOP_PANEL (state, value) {
    state.topPanel = value
  },
  SET_MAIN_MENU (state, value) {
    state.mainMenu = value
  },
  SET_TICKER (state, value) {
    state.ticker = value
  }
}

export const actions = {
  async getTagsApi ({ commit }, tag) {
    if (!tag) { return false }
    let ip, topPanel, mainMenu, ticker, result
    try {
      ip = await this.$axios.$get(`https://iz.ru/api/0/tag/${tag}`)
      result = ip.status.code === 200
    } catch (error) {
      result = false
      console.warn(error)
    }
    try {
      topPanel = ip.included.topPanel.objects
      commit('SET_TOP_PANEL', topPanel)
    } catch (error) {
      console.warn(error)
    }
    try {
      mainMenu = ip.included.menu.objects
      commit('SET_MAIN_MENU', mainMenu)
    } catch (error) {
      console.warn(error)
    }
    try {
      ticker = ip.included.ticker.objects
      commit('SET_TICKER', ticker)
    } catch (error) {
      console.warn(error)
    }
    return result
  },
  // async fetchTags ({ commit }, tag) {
  //   const response = await this.$axios.$get(`https://iz.ru/api/0/tag/${tag}`)
  //   const { status, included } = response
  //   if (status.code !== 200) {
  //     // error({ statusCode: status.code, message: `http response status: ${status.code}` })
  //     // throw new Error(`http response status: ${status.code}`)
  //     return false
  //   }
  //   const { topPanel, menu, ticker } = included
  //   topPanel?.objects ? commit('SET_TOP_PANEL', topPanel.objects) : console.warn('topPanel has no key "objects" by store/tags')
  //   menu?.objects ? commit('SET_MAIN_MENU', menu.objects) : console.warn('menu has no key "objects" by store/tags')
  //   ticker?.objects ? commit('SET_TICKER', ticker.objects) : console.warn('ticker has no key "object" by store/tags')
  // }
  fetchTags ({ commit }, tag) {
    return this.$axios
      .$get(`https://iz.ru/api/0/tag/${tag}`)
      .then(({ status, included = {} }) => {
        if (status.code !== 200) { throw new Error(`http response status: ${status.code}`) }
        const { topPanel, menu, ticker } = included
        if (topPanel?.objects) { commit('SET_TOP_PANEL', topPanel.objects) }
        if (menu?.objects) { commit('SET_MAIN_MENU', menu.objects) }
        if (ticker?.objects) { commit('SET_TICKER', ticker.objects) }
      })
  }
}
