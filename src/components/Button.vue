<template>
  <button v-on:click="triggerEvent">Click Me!</button>
</template>

<script>
  export default {
    name: 'Button',
    methods: {
      triggerEvent() {
        this.$emit('change-seen')
      }
    }
  }
</script>
