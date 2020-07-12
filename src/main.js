import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log("in this bitch")

let openCurtain = document.getElementById("openCurtain");

function openThatBitch() {
  openCurtain.checked = !openCurtain.checked;
}
openThatBitch()