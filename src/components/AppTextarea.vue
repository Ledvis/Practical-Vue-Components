<template>
  <textarea
    :name="name"
    :id="name"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    :value="value"
    :rows="rows"
    class="form-control"
  >
  </textarea>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    value: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    rows() {
      return Math.max(5, this.value.split('\n').length);
    }
  }
}
</script>