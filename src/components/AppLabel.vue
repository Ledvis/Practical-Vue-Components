<template>
  <label :for="forInput">
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    forInput: {
      required: true,
      type: String
    }
  }
}
</script>

<style>
</style>
