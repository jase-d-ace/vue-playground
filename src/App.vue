<script>
import HelloWorld from './components/HelloWorld.vue'
import SecondComponent from './components/SecondComponent.vue'
import ConditionalComponent from './components/ConditionalComponent.vue'
import Button from './components/Button.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
  },
  computed: {
    ...mapState({
      foo: state => state.foo,
      bar: state => state.bar,
      seen: state => state.seen
    }),
  },
  methods: {
    //something goes here?
  },
  // mounted method is AFTER the methods object
  mounted() {
    console.log(`hello world!`, this.$store)
  },
  components: {
    HelloWorld,
    SecondComponent,
    ConditionalComponent,
    Button
  }
}
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :foo="foo" />
    <SecondComponent :bar="bar" />
    <ConditionalComponent v-if="seen" />
    <Button @change-seen="setSeen" />
  </div>
</template>

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
