<template>
  <div class="error-404">
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
