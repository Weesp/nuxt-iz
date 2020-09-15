export const state = () => ({
  all: [],
  topPanel: [],
  mainMenu: []
})

export const getters = {
  getTopPanel: (state) => {
    return state.topPanel
  },
  getMainMenu: (state) => {
    return state.mainMenu
  }
}

export const mutations = {
  SET_IP (state, value) {
    state.topPanel = value.topPanel ? value.topPanel : []
    state.mainMenu = value.mainMenu ? value.mainMenu : []
  }
}

export const actions = {
  async getTagsApi ({ commit }, tag = 'bbc') {
    let ip, topPanel, mainMenu
    try {
      ip = await this.$axios.$get(`https://iz.ru/api/0/tag/${tag}`)
    } catch (e) {
      ip = []
    }
    try {
      topPanel = ip.included.topPanel.objects
      mainMenu = ip.included.menu.objects
    } catch (e) {
      topPanel = []
      mainMenu = []
    }
    const result = {
      all: ip,
      topPanel,
      mainMenu
    }
    commit('SET_IP', result)
    return result
  }
}
