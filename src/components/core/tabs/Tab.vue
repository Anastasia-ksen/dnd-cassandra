<template lang="pug">
section.component-tab-panel(
    v-show='isActive'
    :aria-hidden="!isActive"
)
    slot
</template>

<script>
// max length of element identifier
const MAX_ID_LEN = 80

export default {
  name: 'Tab',
  props: {
    id: {
      type: String,
      default: null,
      required: false,
      validator: id => (!id || id.length <= MAX_ID_LEN ? 'success' : 'danger')
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isActive: false,
    isVisible: true
  })
}
</script>
