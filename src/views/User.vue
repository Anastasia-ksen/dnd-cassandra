<template lang="pug">
    form
        legend user form
        fieldset
            label user name
            input(editable='false' :value='user.name')
</template>

<script>
export default {
    name: 'User',
    data: () => ({
        user: {
            name: 'Anastasyia'
        }
    })
}
</script>