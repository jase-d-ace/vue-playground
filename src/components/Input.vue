<script>
  export default {
    name: 'Input',
    data() {
      return {
        message: "Learning me a Vue things"
      }
    }
  }
</script>

<template>
  <h1> {{ message }}</h1>
  <input type="text" v-model="message" />
</template>
