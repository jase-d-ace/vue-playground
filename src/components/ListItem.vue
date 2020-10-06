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
      <p>{{ guitar.have ? "I have this model" : "I do not have this model" }}</p>
    </li>
  </div>
</template>
