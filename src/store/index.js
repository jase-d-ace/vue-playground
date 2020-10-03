import Vuex from "vuex";

const store = createStore({
  state() {
    return {
      foo:"Let's be mature, not 12",
      bar:"How to Vue",
      seen: true
    }
  },
  mutations: {
    setSeen() {
      this.seen = !this.seen
      console.log(`hello world! Right now you ${this.seen ? 'can' : 'cannot'} see me!`)
    }
  },
});

export default store;
