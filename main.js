import * as Vue from './js/vue.global.js';
console.log(Vue)

const rootComponent = {
  name: 'App',
  setup() {    

  },
  render() {
    return h('HelloWord')
  }
}

const app = Vue.createApp(rootComponent)
app.mount('#app')
