<template>
  <div>
    <AppButton @click.prevent="clicked" :theme="'danger'" disabled />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'home',
  components: {
    AppButton
  },
  methods: {
    clicked(evt) {
      console.log(evt);
    }
  }
}
</script>
