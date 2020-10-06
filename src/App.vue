<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :foo="foo" />
    <SecondComponent v-bind:style="{color: color}" :bar="bar" />
    <ConditionalComponent v-if="seen" />
    <ListContainer :guitars="guitars" />
    <Button />
    <Input />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SecondComponent from './components/SecondComponent.vue'
import ConditionalComponent from './components/ConditionalComponent.vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import ListContainer from './components/ListContainer.vue'
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
  },
  components: {
    HelloWorld,
    SecondComponent,
    ConditionalComponent,
    Button,
    ListContainer,
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
