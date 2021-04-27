<template lang="pug">
    form.example-form
        legend(v-t='"forms.example.title"')
        fieldset
            label(v-t='"forms.expample.userName"')
            input(type='text' v-model='userName')
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            userName: ''
        }
    }
}
</script>

<style lang="scss">
</style>
