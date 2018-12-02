import Vue from 'vue';

const Modal = {
  install(Vue) {
    this.event = new Vue();
    
    Vue.prototype.$modal = {
      show(modal, params = {}) {
        Modal.event.$emit('show', modal, params)
      },
      hide(modal) {
        Modal.event.$emit('hide', modal)
      },
      $event: this.event
    }
  }
}

Vue.use(Modal);

export default Modal;