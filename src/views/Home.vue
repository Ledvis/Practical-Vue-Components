<template>
  <div>
    <AppSignInModal />
    <a href="#" @click.prevent="openModal">Open Modal</a>
  </div>
</template>
<script>
import AppSignInModal from '@/components/modals/AppSignInModal'

export default {
  name: 'home',
  components: {
    AppSignInModal
  },
  methods: {
    openModal() {
      this.$modal.show('signin', {name: 'Zhenya'})
    }
  }
}
</script>

<style>
a {
  margin-bottom: 10px;
}
</style>

