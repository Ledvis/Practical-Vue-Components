<template>
  <div>
    <AppButton @click.prevent="clicked" :theme="'danger'" text="test" title="Sign up with account" target="_blank" >
      <strong>hello world! &rarr;</strong>
    </AppButton>
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
