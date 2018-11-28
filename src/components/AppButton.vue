<template>
  <router-link
    class="btn"
    @click.native="clicked"
    :class="[themes[theme], sizes[size], {'disabled': disabled}]"
    :to="to"
    :title="`?: ${title}`"
  >
    <slot>{{ text }}</slot>
  </router-link>
</template>

<script>
export default {
  data () {
    return {
      themes: {
        primary: 'btn-primary',
        danger: 'btn-danger'
      },
      sizes: {
        normal: '',
        large: 'btn-lg'
      }
    }
  },
  props: {
    title: {
      required: false,
      type: String,
      default: ''
    },
    text: {
      required: false,
      type: String,
      default: ''
    },
    theme: {
      required: false,
      type: String,
      default: 'primary'
    },
    size: {
      required: false,
      type: String,
      default: 'normal'
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    to: {
      required: false,
      type: Object,
      default () {
        return {
          name: 'home'
        }
      }
    }
  },
  methods: {
    clicked (e) {
      if (this.disabled) {
        return;
      }

      this.$emit('click', e);
    }
  }
}

</script>

<style>
</style>
