import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      foo:"Let's be mature, not 12",
      bar:"How to Vue",
      seen: true,
      guitars: [{
        id: 0,
        brand: "Gibson",
        model: "Les Paul",
        have: false
      },
        {
          id: 1,
          brand: "Fender",
          model: "Stratocaster",
          have: true
        },
        {
          id: 2,
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
