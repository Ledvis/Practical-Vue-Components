<template>
  <transition name="modal">
    <div v-if="isVisible">
      <div
        class="app-modal"
        @click.prevent="$modal.hide(name)"
      >
      </div>
      <div class="app-modal-inner">
        <slot
          name="body"
          :params="params"
        />
        <a
          href="#"
          @click.prevent="$modal.hide(name)"
        >&times;</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      params: {},
      isVisible: false
    }
  },
  props: {
    name: {
      required: true,
      type: String
    }
  },
  beforeMount () {
    this.$modal.$event.$on('show', (modal, params) => {
      if (modal === this.name) {
        this.params = params;

        if (!this.$listeners.beforeOpen) {
          this.isVisible = true;
          return;
        }

        this.$emit('beforeOpen', () => {
          this.isVisible = true;
        })
      }
    }),
      this.$modal.$event.$on('hide', modal => {
        if (modal === this.name) {
          this.isVisible = false;
        }
      })
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (this.isVisible && e.keyCode === 27) {
        this.isVisible = false;
      }
    })
  }
}
</script>

<style>
.app-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(77, 73, 73);
}

.app-modal-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 500px;
  padding: 30px;
  background-color: rgb(187, 162, 48);
  transform: translate(-50%, -50%);
}

.app-modal-inner a {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 30px;
}

.modal-enter-active,
.modal-leave-active {
  transition: 200ms all;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}
</style>
