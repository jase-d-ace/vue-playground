import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      foo:"Let's be mature, not 12",
      bar:"How to Vue",
      seen: true
    }
  },
  mutations: {
    setSeen(state, seen) {
      state.seen = seen
      console.log(`hello world! Right now you ${this.seen ? 'can' : 'cannot'} see me!`)
    }
  },
});

export default store;
