module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages:{
    'index':{
      entry: './src/pages/main/main.js',
      template: 'public/index.html',
      title: 'home',
    },
    'init':{
      entry: './src/pages/init/main.js',
      title: 'init',
    },
    'login':{
      entry: './src/pages/login/main.js',
      title: 'login'
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
