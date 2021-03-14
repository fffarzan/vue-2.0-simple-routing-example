import Vue from 'vue';
import Routes from './routes';
import NotFound from './pages/404.vue';

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    viewComponent() {
      return Routes[this.currentRoute] || NotFound;
    }
  },
  render(h) {
    return h(this.viewComponent);
  }
})
