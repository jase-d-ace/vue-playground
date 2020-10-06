import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      foo:"Let's be mature, not 12",
      bar:"How to Vue",
      seen: true,
      guitars: [{
        brand: "Gibson",
        model: "Les Paul",
        have: false
      },
        {
          brand: "Fender",
          model: "Stratocaster",
          have: true
        },
        {
          brand: "Ibanez",
          model: "RG2020",
          have: false
        }],
      color: "cornflowerblue"
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
