<template>
  <div>
    <input
      :type="inputType"
      :name="name"
      :id="name"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :value="value"
      class="form-control"
    >
    <a
      href="#"
      v-if="type === 'password'"
      @click.prevent="passwordRevealed = !passwordRevealed"
    >{{ passwordRevealed ? 'Hide' : 'Reveal' }} password</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      passwordRevealed: false
    }
  },
  props: {
    name: {
      required: true,
      type: String
    },
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    value: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    inputType() {
      return this.passwordRevealed ? 'text' : this.type 
    }
  }
}
</script>