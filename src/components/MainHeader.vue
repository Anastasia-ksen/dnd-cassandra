<template lang="pug">
header.hl-main-header
    Logo
    h1(v-t='"headers.main.title"')
</template>

<script>
import Logo from '@/components/Logo'

export default {
    name: 'MainHeader',
    components: {
        Logo,
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/views/main-header';
</style>