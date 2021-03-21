<template lang="pug">
#app
    Logo
    //- div
    //-     BaseButton.hl-button-primary(v-t='"controls.buttons.action"')
    //-     MdButton(v-t='"controls.buttons.action"')
</template>

<script>
import Logo from '@/components/core/Logo'

export default {
    name: 'App',
    components: {
        Logo,
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/base';
</style>
