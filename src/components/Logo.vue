<template lang="pug">
img.hl-simple-logo(
    src='@/assets/images/logo/simple-logo@0.75x.png',
    :alt='$t("fallback.img.logo")',
    srcset="@/assets/images/logo/simple-logo@0.5x.png 128w,\
                    @/assets/images/logo/simple-logo@0.75x.png 192w,\
                    @/assets/images/logo/simple-logo@1x.png 383w",
    sizes="(max-width: 540px) 60px,\
                    (max-width: 1024px) 18vw,\
                    200px"
)
</template>

<script>
export default {
    name: 'Logo',
}
</script>

<style lang="scss">
@import '@/assets/scss/views/logo';
</style>