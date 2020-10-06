<script>
export default {
  name: 'ListItem',
  props: {
    guitar: Object
  }
}
</script>

<template>
  <div class="list-item">
    <li class="some-class">
      <p>{{ guitar.brand }} {{ guitar.model }}</p>
    </li>
  </div>
</template>
