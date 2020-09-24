export default {
  methods: {
    extidGenerate () {
      let text = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < 47; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      text = encodeURIComponent(text)
      localStorage.extid = text
      return text
    },
    getUserExtid () {
      return localStorage?.extid ? localStorage.extid : this.extidGenerate()
    }
  }
}
