<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :foo="foo" />
    <SecondComponent v-bind:style="{color: color}" :bar="bar" />
    <ConditionalComponent v-if="seen" />
    <Button @change-seen="setSeen" />
    <Input />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SecondComponent from './components/SecondComponent.vue'
import ConditionalComponent from './components/ConditionalComponent.vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      foo: state => state.foo,
      bar: state => state.bar,
      seen: state => state.seen,
      guitars: state => state.guitars,
      color: state => state.color
    })
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
    Button,
    Input
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
