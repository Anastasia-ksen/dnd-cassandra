<template lang="pug">
MdButton(v-on='$listeners', v-bind='$attrs')
    slot
</template>

<script>
export default {
    name: 'BaseButton',
}
</script>

<style lang="scss">
</style>