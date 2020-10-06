<script>
import ListItem from './ListItem.vue'
export default {
  name: 'ListContainer',
  props: {
    guitars: Array
  },
  components: {
    ListItem
  }
}
</script>

<template>
  <div class="list">
    <h1>Guitars</h1>
    <ul v-bind:key="guitar" v-for="guitar in guitars" class="vue-list">
      <ListItem :guitar="guitar" />
    </ul>
  </div>
</template>
