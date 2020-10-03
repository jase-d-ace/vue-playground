<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :foo="foo" />
    <SecondComponent :bar="bar" />
    <ConditionalComponent v-if="seen" />
    <Button @change-seen="setSeen" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SecondComponent from './components/SecondComponent.vue'
import ConditionalComponent from './components/ConditionalComponent.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  data() {
    return {
      foo:"Let's be mature, not 12",
      bar:"How to Vue",
      seen: true
    };
  },
  methods: {
    setSeen() {
      this.seen = !this.seen
      console.log(`hello world! Right now you ${this.seen ? 'can' : 'cannot'} see me!`)
    }
  },
  components: {
    HelloWorld,
    SecondComponent,
    ConditionalComponent,
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
